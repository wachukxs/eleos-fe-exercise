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
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [errorFetchingData, setErrorFetchingData] = useState(false);
  const [someOtherErrorOccurred, setSomeOtherErrorOccurred] = useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        setSomeOtherErrorOccurred(true)
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
            style={{ width: "fit-content", margin: "0 auto" }}
            severity="error"
          >
            {userData?.message}
          </Alert>
        </Box>
      ) : (
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
