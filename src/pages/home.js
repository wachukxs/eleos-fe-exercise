import React from "react";
import { Box, Typography, Button, Toolbar, AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Home() {
  // Using eleos's Brand colors
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6058FF",
      },
      secondary: {
        main: "#24D983",
      },
      success: {
        main: "#66BB6A",
      },
      warning: {
        main: "#FFA726",
      },
      info: {
        main: "#18B2D8",
      },
      error: {
        main: "#F44336",
      },
      white: {
        main: "#fff",
      },
      black: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          style={{ marginBottom: "15px" }}
        >
          <Toolbar>
            <Link to="/">
              <Button
                style={{ textTransform: "none" }}
                color="white"
                size="large"
              >
                List App
              </Button>
            </Link>
            <div style={{ flexGrow: 1 }}></div>
            <Link to="/users">
              <Button color="white" size="small">Users</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Outlet />
      </Box>
      {/* TODO: Maybe add a footer! */}
    </ThemeProvider>
  );
}
