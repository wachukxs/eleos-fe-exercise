import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Icon from "@mui/material/Icon";

export default function Task({ task, deleteAction }) {
  // console.log('task to display', task);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {task?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteAction}>
          <Icon>delete_forever</Icon>
        </Button>
      </CardActions>
    </Card>
  );
}
