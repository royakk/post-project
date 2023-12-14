import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import { PostType } from "../types";
import { ValidationTextFields } from "./textField";
import Button from "./button";
import { Stack, Alert, Snackbar } from "@mui/material";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../sevices/postAPI";
import { useState } from "react";
interface FormDialogProps {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
  title?: string;
}

export default function FormDialog({
  openModal,
  setOpenModal,
  title,
}: FormDialogProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userId: 2,
      title: "",
      body: "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (post: PostType) => api.createPost(post),
    onSuccess: async () => {
    alert("successful Create Post")
      await queryClient.invalidateQueries({ queryKey: ["posts"] });

      setOpenModal(false);
      reset({});
    },
    onError: (error) => alert(error.message),
  });
  const onSubmit = async (data: PostType) => {
    try {
      mutate(data);
    } catch (error) {}
  };
  const handleClose = () => {
    reset({});
    setOpenModal(false);
  };

  return (
    <>
      <Dialog
        PaperProps={{ sx: { minWidth: 500, minHeight: 400 } }}
        open={openModal}
        onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Stack spacing={3}>
              <Controller
                name="userId"
                control={control}
                render={({ field }) => (
                  <ValidationTextFields label="UserId" {...field} />
                )}
              />

              <Controller
                name="title"
                control={control}
                rules={{
                  required: "field required",
                }}
                render={({ field }) => (
                  <ValidationTextFields
                    helperText={errors.title?.message}
                    error={Boolean(errors.title)}
                    required
                    label="Title"
                    {...field}
                  />
                )}
              />

              <Controller
                name="body"
                control={control}
                render={({ field }) => (
                  <ValidationTextFields label="Body" {...field} />
                )}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      
    </>
  );
}
