import React from 'react'
import * as Yup from 'yup'
import { useForm,FormProvider} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Alert, Button, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material'
import { Eye, EyeSlash } from 'phosphor-react'
import { useTheme } from '@emotion/react'

const ResetPasswordForm = () => {
    const ResetPasswordSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email('Email must be a valid email address'),
       
    })

    const defaultValues = {
        email: 'abc123@gmail.com',
       
    }

    const methods = useForm({
        resolver: yupResolver(ResetPasswordSchema),
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
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

            <Stack spacing={3}>
                {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
                <TextField label='Email address' name='Email'></TextField>
                
                {/* <RHFTextField name="email" label="Email address" /> */}
                {/* <RHFTextField name='password' label='Password' type={showpw ? 'text' : 'password'} InputProps={{
            endAdorment:(
                <InputAdornment>
                    <IconButton onClick={()=>{
                        setShowpw(!showpw);
                    }}>
                        {showpw ? <Eye/>: <EyeSlash/>}
                    </IconButton>
                </InputAdornment>
            )
        }} /> */}
            </Stack>

            <Button fullWidth color='inherit' size='large' type='submit' variant='contained' sx={{bgcolor:'text.primary',color:(theme)=>theme.palette.mode === 'light' ? 'common.white':'grey.800', ' &:hover':{
            bgcolor: 'text.primary',
            color:(theme)=> theme.palette.mode ==='light'?'common.white' : 'grey.800'
        }}} >
            Send Request
        </Button>
        </FormProvider>
    )
}

export default ResetPasswordForm
