import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/**
 * TODO: make inputs a component of their own.
 * @param {*} param0
 * @returns
 */
export default function AddTask({ onAddTaskClick }) {
  let taskSchema = object({
    name: string()
      .required("Task name is required")
      .min(3, "Minimum of 3 characters needed"),
    description: string()
      .required("Task description is required")
      .min(5, "Minimum of 5 characters needed"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: yupResolver(taskSchema),
  });

  const submitTaskToAdd = (data) => {
    console.log("adding task...", data);

    onAddTaskClick(data.name, data.description);
    // TODO: After adding, clear the inputs.
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            {...field}
            error={!!errors?.name}
            helperText={errors?.name?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            id="filled-basic"
            label="Description"
            variant="filled"
            multiline
            rows={4}
            {...field}
            error={!!errors?.description}
            helperText={errors?.description?.message}
          />
        )}
      />

      {/* TODO: Maybe even disable button if name & tasks are empty/have errors */}
      <Button variant="contained" onClick={handleSubmit(submitTaskToAdd)}>
        Submit
      </Button>
    </Box>
  );
}
