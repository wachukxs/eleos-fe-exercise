import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Icon,
  IconButton,
} from "@mui/material";

export default function Task({ task, deleteAction }) {
  return (
    <Card sx={{ display: "flex", alignItems: "start" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {task?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* TODO: Text ellipse overflow on very long description (https://mui.com/material-ui/react-menu/#limitations) */}
          {task?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color="error"
          aria-label="delete task"
          onClick={() => deleteAction(task.id)}
        >
          <Icon>delete_forever</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
