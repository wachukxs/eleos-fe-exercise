import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/system/Unstable_Grid";
import AddTask from "./add-task";
import ListTask from "./list-tasks";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

export default function AddAndListTasks() {
  const generateTaskId = () => Math.random().toString(20).slice(2);

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

  useEffect(() => {
    console.log(userTasks);
    setUserTasksUpdated((userTasksUpdated) => !userTasksUpdated);
  }, [userTasks]);

  const handleClose = (event, reason = null) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage({ open: false, text: "" });
  };

  return (
    <div style={{padding: "10px"}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <AddTask
              userTasksUpdated={userTasksUpdated}
              onAddTaskClick={addUserTask}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <ListTask tasks={userTasks} deleteAction={deleteUserTask} />
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={message.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message.text}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Icon>close</Icon>
          </IconButton>
        }
      />
    </div>
  );
}
