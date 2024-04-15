import React from "react";
import { Typography, Grid } from "@mui/material";
import BackButton from "./back-button";

export default function PageHeader({ title, withBackButton }) {
  return (
    <Grid container alignItems="center" gap="5px">
      {withBackButton ? <BackButton /> : null}
      <Typography variant="h5" gutterBottom={!withBackButton}>{title}</Typography>
    </Grid>
  );
}
