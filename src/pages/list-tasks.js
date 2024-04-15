import React from "react";
import Task from "../components/task";
import Stack from "@mui/system/Stack";
import { Typography, Alert, Icon, Grid } from "@mui/material";

export default function ListTask({
  tasks,
  deleteAction,
  editAction,
  setUserTaskToEdit,
}) {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Add Task List
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" gutterBottom>
            {tasks?.length} task{tasks?.length > 1 ? "s" : ""}
          </Typography>
        </Grid>
      </Grid>

      {tasks.length ? (
        <Stack spacing={2}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              setUserTaskToEdit={setUserTaskToEdit}
              deleteAction={deleteAction}
              editAction={editAction}
              task={task}
            />
          ))}
        </Stack>
      ) : (
        <Alert icon={<Icon>check</Icon>} severity="success">
          No task, you're all cleared up. 🎉
        </Alert>
      )}
    </>
  );
}
