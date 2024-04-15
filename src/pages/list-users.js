import React, { useEffect, useState } from "react";
import { Avatar, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function ListUsers() {
  const columnsDefinition = [
    {
      /**
       * TODO:
       * 1. Maybe if one row is selected, show button to open that selection details in a new tab.
       */
      field: "image",
      headerName: "Pic.",
      width: 70,
      renderCell: (col) => (
        <Avatar
          alt={`${col.row.firstName} ${col.row.lastName}`}
          src={col.value}
        />
      ),
    },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    {
      field: "id",
      headerName: "Details",
      width: 150,
      renderCell: (col) => <Link to={`/users/${col.value}`}>See details</Link>,
    },
  ];

  const usersUrl = "https://dummyjson.com/users";
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((json) => {
        // console.log("users", json);
        setUserData(json.users);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div
        style={{
          height: 350,
          maxWidth: "fit-content",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          All Users
        </Typography>
        <DataGrid
          rows={userData}
          columns={columnsDefinition}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </div>
    </>
  );
}
