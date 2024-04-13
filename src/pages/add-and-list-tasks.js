import React from "react";
import Box from "@mui/material/Box";
import AddTask from "./add-task";
import ListTask from "./list-tasks";

export default function AddAndListTasks() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AddTask />

      <ListTask />
    </Box>
  );
}
