import React from "react";
import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Eye, EyeSlash } from "phosphor-react";
import { useTheme } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [showpw, setShowpw] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "abc123@gmail.com",
    password: "123456",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //submit
      console.log(data);
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
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <TextField name="email" label="Email address" 
        required='true'
        />
        <TextField
          name="password"
          label="Password"
          type={showpw ? "text" : "password"}
          InputProps={{
            endAdorment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowpw(!showpw);
                  }}
                >
                  {showpw ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* <RHFTextField name="email" label="Email address" />
        //         <RHFTextField name='password' label='Password' type={showpw ? 'text' : 'password'} InputProps={{
        //     endAdorment:(
        //         <InputAdornment>
        //             <IconButton onClick={()=>{
        //                 setShowpw(!showpw);
        //             }}>
        //                 {showpw ? <Eye/>: <EyeSlash/>}
        //             </IconButton>
        //         </InputAdornment>
        //     )
        // }} /> */}
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link
          component={RouterLink}
          to="/auth/reset-password"
          variant="body2"
          color="inherit"
          underline="always"
        >
          Forgot password ?
        </Link>
      </Stack>
      <Link component={RouterLink} to="/app" variant="subtitle2">
        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            " &:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Login
        </Button>
      </Link>
    </FormProvider>
  );
};

export default LoginForm;
