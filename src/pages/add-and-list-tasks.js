import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddTask from "./add-task";
import ListTask from "./list-tasks";

export default function AddAndListTasks() {
  const [userTasks, setUserTasks] = useState([
    {
      name: "Test Task Name",
      description:
        "This is a first test task description message for the purpose of demo. I don't want to use Lorem Ipsum. I really don't. You can delete this!",
    },
  ]);

  const addUserTask = (name, description) => {
    // TODO: Updating state this way is better cause it's a callback, right?
    setUserTasks((previousTasks) => [{ name, description }, ...previousTasks]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AddTask onAddTaskClick={addUserTask} />

      <ListTask tasks={userTasks} />
    </Box>
  );
}
