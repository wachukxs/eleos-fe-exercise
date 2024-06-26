import React from "react";
import {
  TextField
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInputText({
  name,
  control,
  error,
  label
}) {

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label={label}
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
