import React from "react";
import {
  TextField
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInputText({
  name,
  control,
  error
}) {

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            error={!!error}
            helperText={error}
            {...field}
          />
        )}
      />
    </>
  );
}
