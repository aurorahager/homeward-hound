'use client'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { Dog } from '@/types/api'

export default function DogCard({ dog }: { dog: Dog }) {
  console.log('DOG INFO', dog)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        alt="green iguana"
        component="img"
        height="140"
        image={dog.img}
      />
      <CardContent>
        <Typography gutterBottom component="div" variant="h5">
          {dog.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }} variant="body2">
          {dog.breed} {dog.age} {dog.zip_code}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
      </CardActions>
    </Card>
  )
}
