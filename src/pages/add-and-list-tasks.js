import React, { useState, useEffect } from "react";
import Grid from "@mui/system/Unstable_Grid";
import AddTask from "./add-task";
import ListTask from "./list-tasks";
import { Slide, Icon, IconButton, Snackbar, Box, Divider } from "@mui/material";
import EditTaskDialog from "../components/edit-task-dialog";

export default function AddAndListTasks() {
  const generateTaskId = () => Math.random().toString(20).slice(2);

  const [userTaskToEdit, setUserTaskToEdit] = useState(null);
  const [message, setMessage] = React.useState({ open: false, text: "" });
  const [userTasksUpdated, setUserTasksUpdated] = useState(false);
  const [userTasks, setUserTasks] = useState([
    {
      id: generateTaskId(),
      name: "Test Task Name",
      description:
        "This is a first test task description message for the purpose of demo. I don't want to use Lorem Ipsum. I really don't. You can delete this!",
    },
  ]);

  const addUserTask = (name, description) => {
    setUserTasks([{ name, description, id: generateTaskId() }, ...userTasks]);
    setMessage({ open: true, text: "Task added" });
  };

  const deleteUserTask = (taskId) => {
    setUserTasks(userTasks.filter((task) => task.id !== taskId));
    setMessage({ open: true, text: "Task deleted" });
  };

  const editUserTask = (task) => {
    setUserTasks(
      userTasks.map((_task) => (_task.id === task?.id ? task : _task))
    );
    setMessage({ open: true, text: "Task edited" });
  };

  useEffect(() => {
    setUserTasksUpdated((userTasksUpdated) => !userTasksUpdated);
  }, [userTasks]);

  const handleSnackBarClose = (event, reason = null) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage({ open: false, text: "" });
  };

  // TODO: maybe use setUserTaskToEdit(null) directly?
  const handleEditDialogClose = () => {
    setUserTaskToEdit(null);
  };

  return (
    <>
      <Box style={{ padding: "10px", maxWidth: "900px", margin: "0 auto" }}>
        <Grid container spacing={6}>
          <Grid xs={12} sm={6}>
            <AddTask
              userTasksUpdated={userTasksUpdated}
              onAddTaskClick={addUserTask}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <ListTask
              setUserTaskToEdit={setUserTaskToEdit}
              tasks={userTasks}
              deleteAction={deleteUserTask}
              editAction={editUserTask}
            />
          </Grid>
        </Grid>
      </Box>
      {!!userTaskToEdit && (
        <EditTaskDialog
          task={userTaskToEdit}
          isOpen={!!userTaskToEdit}
          handleClose={handleEditDialogClose}
          editAction={editUserTask}
        />
      )}
      <Snackbar
        open={message.open}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        TransitionComponent={(props) => <Slide {...props} direction="up" />}
        message={message.text}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackBarClose}
          >
            <Icon>close</Icon>
          </IconButton>
        }
      />
    </>
  );
}
