import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

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
  const usersUrl = "https://dummyjson.com/users/4";
  const [userData, setUserData] = useState(null);

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
      .catch((error) => console.error(error)); // TODO: Show notification on failure
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "0 auto", marginTop: "10%" }}>
        <CardHeader
          avatar={
            <Avatar
              alt={`${userData?.firstName} ${userData?.lastName}`}
              src={userData?.image}
              aria-label="user picture"
            />
          }
          action={
            <IconButton aria-label="settings">
              <Icon>more</Icon>
            </IconButton>
          }
          title={`${userData?.firstName} ${userData?.lastName}`}
          subheader={userData?.email}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
    </>
  );
}
