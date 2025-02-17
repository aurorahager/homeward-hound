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

import { CardContainer } from './styles'

import { useDogContext } from '@/context/dogsContext'
import { Dog } from '@/types/api'

type Props = {
  dog: Dog,
  isLoading: boolean
}

export default function DogCard({ dog, isLoading }: Props): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { img, name, breed, zip_code, id, age } = dog ?? {}

  const handleFavorite = () => {
    dispatch({ type: 'SET_FAVORITE', payload: dog.id })
  }

  return (
    <CardContainer>
      <Box
        sx={{
          width: '100%',
          height: '65%',
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


              }}
            />
        }
      </Box>
      <CardContent component="div">
        <Typography gutterBottom component="h2" variant="h5">
          {name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }} variant="body2">
          {breed} {age} {zip_code}
        </Typography>
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
    </CardContainer>
  )
}
