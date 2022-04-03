import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import product from '../../../sanity/schemas/product';
import urlForThambnail from './../../../utils/image';

const Productitem = ({ product }) => {
  return (
    <Card>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component='img'
            image={urlForThambnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>
              {product.rating} ({product.numReviews} reviews)
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>{product.price}</Typography>
        <Button size='small' color='primary'>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Productitem;
