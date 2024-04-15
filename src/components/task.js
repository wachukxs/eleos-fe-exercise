import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Icon,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

export default function Task({ task, deleteAction, editAction, setUserTaskToEdit }) {
  const [anchorMenuElement, setAnchorMenuElement] = useState(null);
  const isMenuOpen = Boolean(anchorMenuElement);
  const handleClick = (event) => {
    setAnchorMenuElement(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorMenuElement(null);
  };

  const setTaskToEdit = () => {
    setUserTaskToEdit(task)
    handleMenuClose() // close the menu
  }

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
          id="basic-button"
          aria-controls={isMenuOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? "true" : undefined}
          onClick={handleClick}
          aria-label="task menu"
        >
          <Icon>more_vert</Icon>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorMenuElement}
          open={isMenuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={setTaskToEdit}>Edit</MenuItem>
          <MenuItem
            color="error"
            aria-label="delete task"
            onClick={() => deleteAction(task?.id)}
          >
            Delete
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
}
