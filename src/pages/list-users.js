import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

/***
 * Use table to display data?? 10 users per page??
 */
export default function ListUsers() {
  const columnsDefinition = [
    {
      /**
       * TODO:
       * 1. Lazy load images.
       * 2. If one row is selected, show button to open that selection details in a new tab.
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
        console.log("users", json);
        setUserData(json.users);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      <div
        style={{
          height: 350,
          width: "fit-content",
          margin: "0 auto",
        }}
      >
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
