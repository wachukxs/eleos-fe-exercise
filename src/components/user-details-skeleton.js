import React from "react";
import { CardContent, CardHeader, Card, Skeleton } from "@mui/material";

export default function UserDetailsSkeleton() {
  return (
    <Card sx={{ maxWidth: 376, margin: "0 auto", marginTop: "10px" }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        // action={
        //   <IconButton aria-label="more actions">
        //     <Icon>more</Icon>
        //   </IconButton>
        // }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <CardContent>
        <Skeleton
          sx={{ height: 200, marginBottom: "15px" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
      </CardContent>
    </Card>
  );
}
