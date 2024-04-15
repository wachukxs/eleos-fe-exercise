import React from "react";
import {
  Button,
  TextField,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputText from "./form-input-text";

export default function EditTaskDialog({
  task,
  editAction,
  handleClose,
  isOpen,
}) {
  const taskSchema = object({
    name: string()
      .required("Task name is required")
      .min(3, "Minimum of 3 characters needed"),
    description: string()
      .required("Task description is required")
      .min(5, "Minimum of 5 characters needed"),
  });

  const defaultValues = {
    name: task?.name,
    description: task?.description,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(taskSchema),
  });

  const doUpdate = ({ name, description }) => {
    editAction({
      id: task.id,
      name,
      description,
    });
    handleClose();
  };

  return (
    <>
      <Dialog onClose={handleClose} open={isOpen}>
        <DialogTitle>Edit Task Details</DialogTitle>
        <DialogContent>
          <Box
            component="form"
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            style={{
              width: "fit-content",
              alignSelf: "flex-end",
            }}
            variant="contained"
            onClick={handleSubmit(doUpdate)}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
