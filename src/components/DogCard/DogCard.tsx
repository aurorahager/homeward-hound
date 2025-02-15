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
  Skeleton,
} from '@mui/material'

import { useDogContext } from '@/context/dogsContext'
import { Dog } from '@/types/api'
export default function DogCard({ dog, isLoading }: { dog: Dog, isLoading: boolean }): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { img, name, breed, zip_code, id, age } = dog ?? {}

  const handleFavorite = () => {
    dispatch({ type: 'SET_FAVORITE', payload: dog.id })
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
        {
          isLoading ? <Skeleton animation="wave" variant="rectangular" /> :
            <CardMedia
              alt={`${dog.name} the ${dog.breed}`}
              component="img"
              image={img}
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
        }
      </Box>
      <CardContent>
        {isLoading ? <Skeleton animation="wave" variant="rectangular" /> : <>
          <Typography gutterBottom component="div" variant="h5">
            {name}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} variant="body2">
            {breed} {age} {zip_code}
          </Typography>
        </>
        }
      </CardContent>
      <CardActions>
        {isLoading ? <Skeleton animation="wave" variant="rectangular" /> :
          <Button size="small" onClick={handleFavorite}>
            {state.favoriteIds.includes(id) ? (
              <FavoriteOutlined />
            ) : (
              <FavoriteBorderOutlined />
            )}
            Favorite
          </Button>
        }
      </CardActions>
    </Card>
  )
}
