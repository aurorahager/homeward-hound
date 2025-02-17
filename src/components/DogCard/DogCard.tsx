'use client'

import { FavoriteOutlined, Brightness1 } from '@mui/icons-material'
import {
  Box,
  IconButton,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { CardContainer, CardInfoWrapper, MediaWrapper } from './styles'

import { useDogContext } from '@/context/dogsContext'
import { Dog } from '@/types/api'


export default function DogCard({ dog }: { dog: Dog }): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { img, name, breed, zip_code, id, age } = dog ?? {}

  const handleFavorite = () => {
    dispatch({ type: 'SET_FAVORITE', payload: dog.id })
  }

  return (
    <CardContainer>
      <CardInfoWrapper>
        <MediaWrapper
        >
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
          <IconButton aria-label="Favorite" size="small" onClick={handleFavorite} color="secondary" sx={{
            position: 'absolute',
            top: 3,
            right: 20,
          }}>
            {state.favoriteIds.includes(id) ? (
              <FavoriteOutlined sx={{ fontSize: '1.8rem' }} />
            ) : (
              <FavoriteOutlined sx={{
                fontSize: '1.8rem',
                color: 'white'
              }} />
            )}

          </IconButton>
        </MediaWrapper>
        <Box display="flex" sx={{ flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '10%' }}>
          <CardContent component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <Typography component="h2" variant="h5" sx={{ fontWeight: 800 }}>
                {name}
              </Typography>
              <Brightness1 sx={{ fontSize: '0.5rem', mx: '0.4rem' }} />
              <Typography variant="h6" component="span">
                {breed}
              </Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary' }} variant="subtitle1">
              Age: {age} Location: {zip_code}
            </Typography>
          </CardContent>
        </Box>
      </CardInfoWrapper>
    </CardContainer>
  )
}
