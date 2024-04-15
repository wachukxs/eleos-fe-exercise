import React from "react";
import { Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => {
        navigate(-1);
      }}
    >
      <Icon>arrow_back</Icon>
    </IconButton>
  );
}
