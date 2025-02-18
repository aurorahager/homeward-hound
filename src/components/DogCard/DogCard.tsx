'use client'

import { Brightness1, FavoriteOutlined } from '@mui/icons-material'
import {
  Box,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'

import { useDogContext } from '@/context/dogsContext'
import { Dog } from '@/types/api'
import { IMG_PLACEHOLDER } from '@/utils/constants'

import {
  CardContainer,
  CardInfoWrapper,
  MediaWrapper,
  cardContentStyles,
  contentBoxStyles,
  dotIconStyles,
  iconButtonStyles,
  iconStyles,
  mediaStyles,
} from './styles'

export default function DogCard({ dog }: { dog: Dog }): React.ReactElement {
  const { state, dispatch } = useDogContext()
  const { img, name, breed, zip_code: zipCode, id, age } = dog ?? {}

  const handleFavorite = (): void => {
    dispatch({ type: 'SET_FAVORITE', payload: dog.id })
  }

  return (
    <CardContainer>
      <CardInfoWrapper>
        {/* Card Image and Fave Button */}
        <MediaWrapper>
          <CardMedia
            alt={`${name ?? 'Dog'} the ${breed ?? 'unknown breed'}`}
            component="img"
            image={img ?? IMG_PLACEHOLDER}
            sx={mediaStyles}
          />
          <IconButton
            aria-label="Favorite"
            color="secondary"
            size="small"
            sx={iconButtonStyles}
            onClick={handleFavorite}
          >
            {state.favoriteIds?.includes(id) ? (
              <FavoriteOutlined sx={{ fontSize: '1.8rem' }} />
            ) : (
              <FavoriteOutlined sx={iconStyles} />
            )}
          </IconButton>
        </MediaWrapper>
        {/* Dog Details */}
        <Box display="flex" sx={contentBoxStyles}>
          <CardContent component="div" sx={cardContentStyles}>
            <Box alignItems="center" display="flex">
              <Typography component="h2" sx={{ fontWeight: 800 }} variant="h5">
                {name ?? 'Dog'}
              </Typography>
              <Brightness1 sx={dotIconStyles} />
              <Typography component="span" variant="h6">
                {breed ?? 'unknown breed'}
              </Typography>
            </Box>
            <Typography
              component="div"
              sx={{ color: 'text.secondary' }}
              variant="subtitle1"
            >
              Age: {age ?? 'unknown age'} Location:{' '}
              {zipCode ?? 'unknown location'}
            </Typography>
          </CardContent>
        </Box>
      </CardInfoWrapper>
    </CardContainer>
  )
}
