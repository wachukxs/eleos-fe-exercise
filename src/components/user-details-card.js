import React from "react";
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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  ButtonGroup,
  Tooltip,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function UserDetailsCard({ user }) {
  const [currentTab, setCurrentTab] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Card sx={{ maxWidth: "min-content", margin: "0 auto", marginTop: "10px" }}>
      <CardHeader
        avatar={
          <Avatar
            alt={`${user?.firstName} ${user?.lastName}`}
            src={user?.image}
            aria-label="user picture"
          />
        }
        // action={
        //   <IconButton aria-label="more actions">
        //     <Icon>more</Icon>
        //   </IconButton>
        // }
        title={`${user?.firstName} ${user?.lastName}`}
        subheader={user?.email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user?.firstName} attended {user?.university} and browses using{" "}
          {user?.userAgent}. When online, {user?.firstName}'s username is{" "}
          {user?.username}.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user?.firstName} is {user?.age} years old, and has {user?.eyeColor}{" "}
          eyes. You can call {user?.firstName} via {user?.phone}
        </Typography>
      </CardContent>

      {/* Tabs content */}
      {/* TODO: Maybe show a map integration? */}

      <Box sx={{ width: "100%" }}>
        <TabContext value={currentTab}>
          <CardActions disableSpacing>
            {/* Tabs header */}
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                // variant="scrollable"
                // scrollButtons="auto"
              >
                <Tab label="Job" value="1" />
                <Tab label="Bank" value="2" />
                <Tab label="Crypto" value="3" />
                <Tab label="Other" value="4" />
              </TabList>
            </Box>
          </CardActions>

          <TabPanel value="1">
            <List
              sx={{
                width: "100%",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>image</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user?.company.name}
                  secondary={`${user?.company.address.address}, ${user?.company.address.city}, ${user?.company.address.postalCode}, ${user?.company.address.state}`}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>work</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user?.company.title}
                  secondary={user?.company.department}
                />
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value="2">
            <List
              sx={{
                width: "100%",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>image</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user?.bank.iban} secondary="IBAN" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>work</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`************${user?.bank?.cardNumber?.substring(
                    12
                  )}, (Exp: ${user?.bank.cardExpire})`}
                  secondary={`${user?.bank.cardType}, ${user?.bank.currency}`}
                />
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value="3">
            <List
              sx={{
                width: "100%",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>image</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user?.crypto.coin}
                  secondary={user?.crypto.network}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>work</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Wallet"
                  secondary={
                    <ButtonGroup variant="text" aria-label="Basic button group">
                      <Tooltip
                        title={user?.crypto.wallet}
                        placement="top-start"
                      >
                        <Button
                          style={{
                            textTransform: "none",
                          }}
                          variant="text"
                          disableRipple
                        >
                          <span
                            style={{
                              maxWidth: "180px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              cursor: "help",
                            }}
                          >
                            {user?.crypto.wallet}
                          </span>
                        </Button>
                      </Tooltip>

                      <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => {
                          // TODO: Implement copy and show successful or failed alert
                        }}
                      >
                        <Icon>content_copy</Icon>
                      </IconButton>
                    </ButtonGroup>
                  }
                />
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value="4">
            <List
              sx={{
                width: "100%",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>image</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user?.address.address}
                  secondary={`${user?.address.city}, ${user?.address.postalCode}, ${user?.address.state}`}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>work</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${user?.gender}, ${user?.bloodGroup}`}
                  secondary={`Weighs ${user?.weight} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "info.main" }}>
                    <Icon>work</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user?.ip} secondary={user?.macAddress} />
              </ListItem>
            </List>
          </TabPanel>
        </TabContext>
      </Box>
    </Card>
  );
}
