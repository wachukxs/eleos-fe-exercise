import React, { useEffect } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/**
 * TODO:
 * 1. make inputs a component of their own.
 * 2. Maybe if there's a draft task, show a modal to ask if they want to save as draft the task, before leaving the page.
 * @param {*} param0
 * @returns
 */
export default function AddTask({ onAddTaskClick, userTasksUpdated }) {
  let taskSchema = object({
    name: string()
      .required("Task name is required")
      .min(3, "Minimum of 3 characters needed"),
    description: string()
      .required("Task description is required")
      .min(5, "Minimum of 5 characters needed"),
  });

  const defaultValues = {
    name: "",
    description: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(taskSchema),
  });

  const submitTaskToAdd = (data) => {
    onAddTaskClick(data.name, data.description);
  };

  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTasksUpdated]);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Task Form
      </Typography>
      <Box
        component="form"
        // sx={{
        //   '& .MuiTextField-root': { m: 1, width: '25ch' },
        // }}
        display="flex"
        gap="15px"
        noValidate
        autoComplete="off"
        flexDirection="column"
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
    </>
  );
}
