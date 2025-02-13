'use client'

import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { useFaveDogs } from '@/context/favDogsContext'
import { Dog } from '@/types/api'

export default function DogCard({ dog }: { dog: Dog }) {
  console.log('DOG INFO', dog)
  const { faves, setFaves } = useFaveDogs()

  const handleFavorite = () => {
    setFaves((prev) => [...prev, dog.id])
    console.log('FAVES', faves)
  }
  return (
    <Card sx={{ width: 345 }}>
      <Box
        sx={{
          width: '100%',
          height: 250,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia
          alt={`${dog.name} the ${dog.breed}`}
          component="img"
          image={dog.img}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            filter: 'sepia(20%) contrast(90%) brightness(80%)',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(210, 180, 140, 0.35)',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            },
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom component="div" variant="h5">
          {dog.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }} variant="body2">
          {dog.breed} {dog.age} {dog.zip_code}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleFavorite}>
          {faves.includes(dog.id) ? (
            <FavoriteOutlined />
          ) : (
            <FavoriteBorderOutlined />
          )}
          Favorite
        </Button>
      </CardActions>
    </Card>
  )
}
