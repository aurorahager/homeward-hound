'use client'

import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useDogContext } from '@/context/dogsContext'
import { setUserLogin } from '@/services/userService'
import { loginSchema } from '@/utils/validation'

interface FormData {
  name: string;
  email: string;
}

export default function LogInForm(): React.ReactElement {
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
    <Box
      m={0}
      sx={{
        display: 'flex',
        justifyContent: 'stretch',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/login-side.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#bcdcd1',
          width: '50vw',
          height: '100vh',
        }}
      >
        <Typography
          style={{ flexGrow: 1 }}
          variant="h5"
          sx={{
            fontFamily: "'Cabin', sans-serif",
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            display: 'inline-block',
            marginLeft: '3%',
            marginTop: '1%',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              position: 'absolute',
              height: '4px',
              backgroundColor: 'secondary.main',
              borderRadius: '2px',
              margin: '0 auto',
              marginTop: '1px',
            },
          }}
        >
          Homeward Hound
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '50vw',

      }}>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
            width: '80%',
            padding: 5,
            marginY: 5,

          }}
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
              padding: 5,
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
        </Paper>
      </Box>
    </Box>
  )
}

