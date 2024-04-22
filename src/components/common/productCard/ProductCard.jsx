import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './productCard.css'; 
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card className="product-card">
      <CardMedia
        className="product-media"
        image={img}
        title="green iguana"
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         $ {price}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/ItemDetail/${id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;