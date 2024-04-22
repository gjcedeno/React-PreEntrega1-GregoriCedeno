import React from "react";
import { Typography, Grid, Card, CardMedia, CardContent, Box } from "@mui/material";

const ItemDetail = ({ item }) => {
  return (
    <Box marginTop={15}>
    
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
      <Card>
          <CardMedia
            component="img"
            height="300" 
            image={item.img}
            alt={item.title}
            style={{ objectFit: 'contain', height: "500px" }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6} marginTop={15}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Precio: ${item.price}
          </Typography>
          <Typography variant="body1" paragraph>
            Descripción del producto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            libero justo, et mattis justo venenatis vel. Vestibulum hendrerit justo a consequat varius.
          </Typography>
          <Typography variant="body2">
            <strong>Categoría:</strong> {item.category}
          </Typography>
          <Typography variant="body2">
            <strong>Stock:</strong> {item.stock}
          </Typography>
          {/* Agrega más detalles del producto aquí si es necesario */}
        </CardContent>
        
      </Grid>
      
    </Grid>
    </Box>
  );
};

export default ItemDetail;