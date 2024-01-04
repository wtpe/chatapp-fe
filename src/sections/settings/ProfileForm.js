import React from "react";
import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  Alert,
  
  Button,
  
  Stack,
  TextField,
} from "@mui/material";

import { useTheme } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const ProfileForm = () => {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avt is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file,{
        preview:URL.createObjectURL(file)
      })

      if(file){
        setValue("avatarUrl",newFile,{shouldValidate:true})
      }
    },[setValue]);

  const onSubmit = async (data) => {
    try {
      //submit
      console.log("Data", data);
      // dispatch(LoginUser(data))
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  const theme = useTheme();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} >
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <TextField name="name" label="Name " helperText='This name is visible to your contacts' />
        <TextField multiline rows={3} maxRows={5} name='about' label='About' />
      </Stack>
      <Stack direction='row' justifyContent='end'>
        <Button color='primary' size="large" type="submit" variant="outlined" >

        </Button>
      </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
