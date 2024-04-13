import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTask from "./add-task";
import ListTask from "./list-tasks";
import { Link } from "react-router-dom";
import AddAndListTasks from "./add-and-list-tasks";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Eleos.
          </Typography>

          <Link to="/users">Users</Link>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
}
