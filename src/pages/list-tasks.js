import React from "react";
import Task from "../components/task";

export default function ListTask({tasks}) {
  console.log('tasks to display', tasks);
  
  return (
    tasks.map((_task, i) => (
      <Task key={i} task={_task} />
    ))
  );
}
