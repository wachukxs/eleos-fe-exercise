import React from "react";
import Task from "../components/task";
import Stack from "@mui/system/Stack";
import { Typography, Alert, Icon } from "@mui/material";

export default function ListTask({ tasks, deleteAction }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Task List
      </Typography>
      {tasks.length ? (
        <Stack spacing={2}>
          {tasks.map((task) => (
            <Task key={task.id} deleteAction={deleteAction} task={task} />
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
