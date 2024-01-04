import {
  Autocomplete,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const MEMBERS = ["Name 1", "Name 2", "Name 3"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("data", data);
    } catch (er) {
      console.log("error", er);
    }
  };
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValues] = React.useState("abc");
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* <RHFTextField name='title' label='Title' /> */}
        {/* <RHFAutocomplete name='member' label='Members' multiple/> */}
        <TextField name="title" label="Title" />
        <Autocomplete
          name="member"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS}
          ChipProps={{ size: "medium" }}
          renderInput={(params) => <TextField {...params} label="Members" />}
        />

        <Stack
          spacing={2}
          direction={"row"}
          alignItems="center"
          justifyContent="end"
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreatGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      TransitionComponent={Transition}
      keepMounted
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-p=decription"
      sx={{ p: 4 }}
    >
      {/* title */}
      <DialogTitle>Create New Group</DialogTitle>
      {/* COntent */}
      <DialogContent sx={{ mt: 4 }}>
        {/* Form */}
        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreatGroup;
