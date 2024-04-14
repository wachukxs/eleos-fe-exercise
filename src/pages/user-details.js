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
} from "@mui/material";
import { useParams } from "react-router-dom";
import UserDetailsSkeleton from "../components/user-details-skeleton";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/***
 * Design inspiration https://www.uidesigndaily.com/posts/sketch-profile-card-stats-list-day-1337
 */
export default function UserDetails() {
  // TODO: Pick user id from route param.
  const { userId } = useParams();
  console.log(userId);
  const usersUrl = `https://dummyjson.com/users/${userId}`;
  const [userData, setUserData] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((user) => {
        console.log("user", user);
        setUserData(user);
      })
      .catch((error) => {
        console.error(error);
        // TODO: show error. Also do check for if user is not null
      })
      .finally(() => setFetchingData(false)); // TODO: Show notification on failure
  }, []);

  return (
    <>
      {fetchingData ? (
        <UserDetailsSkeleton />
      ) : userData ? (
        <Card sx={{ maxWidth: 345, margin: "0 auto", marginTop: "10%" }}>
          <CardHeader
            avatar={
              <Avatar
                alt={`${userData?.firstName} ${userData?.lastName}`}
                src={userData?.image}
                aria-label="user picture"
              />
            }
            // action={
            //   <IconButton aria-label="more actions">
            //     <Icon>more</Icon>
            //   </IconButton>
            // }
            title={`${userData?.firstName} ${userData?.lastName}`}
            subheader={userData?.email}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* Tabs header */}
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </CardActions>

          {/* Tabs content */}

          <Box sx={{ width: "100%" }}>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
