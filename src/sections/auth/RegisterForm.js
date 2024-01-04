import React from 'react'
import * as Yup from 'yup'
import {FormProvider, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { Alert, Button, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@emotion/react'
import { Eye, EyeSlash } from 'phosphor-react'

const RegisterForm = () => {
    const [showpw, setShowpw] = useState(false);
    const RegisterSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email('Email must be a valid email address'),
        password: Yup.string().required('Password is required'),
    })

    const defaultValues = {
        firstName:'',
        lastName:'',
        email: '',
        password: ''
    }

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods;

    const onSubmit = async (data) => {
        try {
            //submit
        } catch (error) {
            console.log(error);
            reset();
            setError('afterSubmit', {
                ...error,
                message: error.message,
            })
        }
    }
    const theme = useTheme();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={3} >
            {!!errors.afterSubmit && (
                <Alert severity='Error'>{errors.afterSubmit.message}</Alert>
            )}
            <Stack direction={{xs:'column',sm:'row'}} spacing={2} >
                <TextField name='firstName' label='First Name' />
                <TextField name='lastName' label='Last Name' />
            </Stack>

            <TextField label='Email address' name='Email'></TextField>
                <TextField name='password' label='Password' type={showpw ? 'text' : 'password'} InputProps={{
            endAdorment:(
                <InputAdornment>
                    <IconButton onClick={()=>{
                        setShowpw(!showpw);
                    }}>
                        {showpw ? <Eye/>: <EyeSlash/>}
                    </IconButton>
                </InputAdornment>
            )
        }} ></TextField  >
        </Stack>
        <Button fullWidth color='inherit' size='large' type='submit' variant='contained' sx={{bgcolor:'text.primary',color:(theme)=>theme.palette.mode === 'light' ? 'common.white':'grey.800', ' &:hover':{
            bgcolor: 'text.primary',
            color:(theme)=> theme.palette.mode ==='light'?'common.white' : 'grey.800'
        }}} >
            Sign in
        </Button>
    </FormProvider>
  )
}

export default RegisterForm
