import React from "react";
import { Box, Typography, Button, Toolbar, AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="warning"
        style={{ marginBottom: "15px" }}
      >
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="div">
              List App
            </Typography>
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          <Link to="/users">
            <Button color="inherit">Users</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
    // TODO: We need a footer!
  );
}
