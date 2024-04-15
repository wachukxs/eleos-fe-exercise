import React, { useEffect, useState } from "react";
import {
  Icon,
  Avatar,
  Typography,
  IconButton,
  CardActions,
  CardContent,
  CardHeader,
  Card,
  Box,
  Tab,
  Tabs,
  Alert,
  Snackbar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useParams } from "react-router-dom";
import UserDetailsSkeleton from "../components/user-details-skeleton";
import UserDetailsCard from "../components/user-details-card";

// TODO: add a11y (prop) in user-details-card.js
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

/***
 * Design inspiration https://www.uidesigndaily.com/posts/sketch-profile-card-stats-list-day-1337
 */
export default function UserDetails() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [errorFetchingData, setErrorFetchingData] = useState(false);
  const [someOtherErrorOccurred, setSomeOtherErrorOccurred] = useState(false);

  useEffect(() => {
    const usersUrl = `https://dummyjson.com/users/${userId}`;

    fetch(usersUrl)
      .then((response) => {
        console.log("status", response.status);
        if (response.status !== 200) {
          setErrorFetchingData(true);
        }
        return response.json();
      })
      .then((user) => {
        console.log("user", user);
        setUserData(user);
      })
      .catch((error) => {
        setSomeOtherErrorOccurred(true);
      })
      .finally(() => setIsFetchingData(false));
  }, [userId]);

  return (
    <>
      {isFetchingData ? (
        <UserDetailsSkeleton />
      ) : errorFetchingData ? (
        <Box>
          <Alert
            style={{ width: "fit-content", margin: "0 auto", marginTop: "10%" }}
            severity="error"
          >
            {userData?.message}
          </Alert>
        </Box>
      ) : (
        <UserDetailsCard user={userData} />
      )}

      <Snackbar
        open={someOtherErrorOccurred}
        autoHideDuration={6000}
        onClose={() => setSomeOtherErrorOccurred(false)}
        message="An error occurred, that's all we know for now"
      />
    </>
  );
}
