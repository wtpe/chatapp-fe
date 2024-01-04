import React from 'react'
import FormProvider from '../../hook-form/FormProvider'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Alert, Button, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Eye, EyeSlash } from 'phosphor-react'
import { useTheme } from '@emotion/react'

const NewPasswordForm = () => {
    const [showpw, setShowpw] = useState(false);
    const NewPasswordSchema = Yup.object().shape({
        newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required("Password is required"),
        confirmPassword: Yup.string().required('Password is required').oneOf([Yup.ref('newPassword'), null], 'Password must match'),
    })

    const defaultValues = {
        newPassword: '',
        confirmpassword: ''
    }

    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema),
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

                <TextField name='newPassword' label='New Password' type={showpw ? 'text' : 'password'} InputProps={{
                    endAdorment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowpw(!showpw);
                            }}>
                                {showpw ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} ></TextField  >

                <TextField name='confirmPassword' label='Confirm Password' type={showpw ? 'text' : 'password'} InputProps={{
                    endAdorment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowpw(!showpw);
                            }}>
                                {showpw ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} ></TextField  >

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

            
            <Button fullWidth color='inherit' size='large' type='submit' variant='contained' sx={{
                bgcolor: 'text.primary', color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800', ' &:hover': {
                    bgcolor: 'text.primary',
                    color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800'
                }
            }} >
                Submit
            </Button>
        </FormProvider>
    )
}

export default NewPasswordForm
