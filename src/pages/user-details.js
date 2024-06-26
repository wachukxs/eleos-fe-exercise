import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Alert, Snackbar } from "@mui/material";
import UserDetailsSkeleton from "../components/user-details-skeleton";
import UserDetailsCard from "../components/user-details-card";
import PageHeader from "../components/page-header";

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
        if (response.status !== 200) {
          setErrorFetchingData(true);
        }
        return response.json();
      })
      .then((user) => {
        setUserData(user);
      })
      .catch((error) => {
        setSomeOtherErrorOccurred(true);
      })
      .finally(() => setIsFetchingData(false));
  }, [userId]);

  return (
    <>
      <div style={{ minWidth: 376, maxWidth: "fit-content", margin: "0 auto" }}>
        <PageHeader title="User Details" withBackButton />
        {isFetchingData ? (
          <UserDetailsSkeleton />
        ) : errorFetchingData ? (
          <Box>
            <Alert
              style={{
                width: "fit-content",
                margin: "0 auto",
                marginTop: "10%",
              }}
              severity="error"
            >
              {userData?.message}
            </Alert>
          </Box>
        ) : (
          <UserDetailsCard user={userData} />
        )}
      </div>

      <Snackbar
        open={someOtherErrorOccurred}
        autoHideDuration={1200}
        onClose={() => setSomeOtherErrorOccurred(false)}
        message="An error occurred, that's all we know for now"
      />
    </>
  );
}
