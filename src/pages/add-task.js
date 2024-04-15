import React, { useEffect } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputText from "../components/form-input-text";

/**
 * TODO:
 * 1. make inputs a component of their own.
 * 2. Maybe if there's a draft task, show a modal to ask if they want to save as draft the task, before leaving the page.
 */
export default function AddTask({ onAddTaskClick, userTasksUpdated }) {
  const taskSchema = object({
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
        <FormInputText control={control} name="name" error={errors?.name} />

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

        <Button
          style={{
            width: "fit-content",
            alignSelf: "flex-end",
          }}
          variant="contained"
          onClick={handleSubmit(submitTaskToAdd)}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
