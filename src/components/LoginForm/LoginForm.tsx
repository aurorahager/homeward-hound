'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useDogContext } from '@/context/dogsContext'
import { setUserLogin } from '@/services/userService'
import { LOGIN_TEXT } from '@/utils/constants'
import { loginSchema } from '@/utils/validation'

import {
  LoginPaper,
  boxStyling,
  formStyling,
  loginButtonStyling,
} from './styles'

interface FormData {
  name: string
  email: string
}

export default function LoginForm(): React.ReactElement {
  const router = useRouter()
  const { dispatch } = useDogContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  })

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (
      ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', '-'].includes(e.key)
    ) {
      return
    }
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    await setUserLogin(data)
    dispatch({ type: 'LOGIN' })
    router.push('/search')
  }

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    handleSubmit(onSubmit)(event).catch((error) => {
      throw error
    })
  }

  return (
    <Box sx={boxStyling}>
      <LoginPaper>
        <Box>
          <Typography sx={{ my: '1rem' }} variant="h3">
            {LOGIN_TEXT.HEADING}
          </Typography>
          <Typography variant="h6">{LOGIN_TEXT.SUBHEADING}</Typography>
        </Box>
        <Box
          noValidate
          autoComplete="off"
          component="form"
          sx={formStyling}
          onSubmit={handleLoginSubmit}
        >
          <Typography>{LOGIN_TEXT.FORM_TEXT}</Typography>
          <TextField
            required
            error={!!errors.name}
            helperText={errors.name?.message}
            label="Name"
            variant="outlined"
            onKeyDown={handleOnKeyDown}
            {...register('name')}
          />
          <TextField
            required
            error={!!errors.email}
            helperText={errors.email?.message}
            label="Email"
            type="email"
            variant="outlined"
            {...register('email')}
          />
          <Button sx={loginButtonStyling} type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </LoginPaper>
    </Box>
  )
}
