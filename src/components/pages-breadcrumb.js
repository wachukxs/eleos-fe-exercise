import React, { useEffect, useState } from "react";
import { Typography, Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../App";

// Unused
export default function PagesBreadcrumb() {
  const location = useLocation();

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ padding: 10 }}>
      {routes[0].children?.map((route, index, _routes) => (
        <>
          {index === _routes.length - 1 ? (
            <Typography color="text.primary">{route.label}</Typography>
          ) : (
            <Link key={index} to={route.path}>
              {route.label}
            </Link>
          )}
        </>
      ))}

      {/* <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Typography color="text.primary">Breadcrumbs</Typography> */}
    </Breadcrumbs>
  );
}
