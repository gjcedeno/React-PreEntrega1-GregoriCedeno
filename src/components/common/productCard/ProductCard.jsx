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
        <Typography variant="body2" className="price-text">
         $ {price}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
      <div className="button-container"> {/* Contenedor del botón con estilo aplicado */}
          <Link to={`/ItemDetail/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
            <Button size="small" style={{ color: 'white' }}>Comprar</Button>
          </Link>
        </div>

      </CardActions>
    </Card>
  );
};

export default ProductCard;