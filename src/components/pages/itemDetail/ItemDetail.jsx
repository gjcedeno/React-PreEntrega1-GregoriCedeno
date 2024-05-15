import React from "react";
import { Typography, Grid, Card, CardMedia, CardContent, Box } from "@mui/material";
import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <Box marginTop={12} px={10}>
    
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
      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography variant="h5" marginTop={4}>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" marginTop={6} style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
            Precio: ${item.price}
          </Typography>
          <Typography variant="body1" paragraph style={{ paddingRight: '350px' }} marginTop={6}>
          Descripción del producto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
          libero justo, et mattis justo venenatis vel. Vestibulum hendrerit justo a consequat varius.
          </Typography>
        
          <Typography variant="body2" marginTop={4} marginBottom={3}>
            <strong>Stock:</strong> {item.stock}
          </Typography>

          <CounterContainer stock={item.stock} initial={initial} onAdd={onAdd}/>

          <Typography variant="body2" marginTop={6}>
            <strong>Categoría:</strong> {item.category}
          </Typography>
        
        </CardContent>
        
        
      </Grid>
      
    </Grid>

    

    </Box>
  );
};

export default ItemDetail;