'use client'

import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useDogContext } from '@/context/dogsContext'
import { setUserLogin } from '@/services/userService'
import { loginSchema } from '@/utils/validation'

import { LoginPaper } from './styles';

interface FormData {
  name: string;
  email: string;
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
  });

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', '-'].includes(e.key)
    ) {
      return;
    }
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    await setUserLogin(data)
    dispatch({ type: 'LOGIN' })
    router.push('/search')
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: { xs: '95%', md: '50vw' }

    }}>
      <LoginPaper
      >
        <Typography variant='h3'>Welcome!</Typography>
        <Typography variant='h6'>Your perfect canine companion awaits</Typography>
        <Box
          noValidate
          autoComplete="off"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
            padding: { xs: 1, md: 5 },
            marginY: 5,
          }}
        >
          <Typography>
            Please enter your name and email to login.
          </Typography>
          <TextField
            required
            error={!!errors.name}
            helperText={errors.name?.message}
            label="Name"
            sx={{ backgroundColor: 'transparent' }}
            variant="outlined"
            onKeyDown={handleOnKeyDown}
            {...register('name')}

          />
          <TextField
            required
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            variant="outlined"
            {...register('email')}

          />
          <Button
            sx={{ height: 50, marginTop: 2, color: 'white' }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Box>
      </LoginPaper>
    </Box>
  )
}
