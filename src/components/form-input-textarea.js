import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInputTextarea({ name, control, error, label }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id="filled-basic"
            label={label}
            variant="filled"
            multiline
            rows={4}
            error={!!error}
            helperText={error}
            {...field}
          />
        )}
      />
    </>
  );
}
