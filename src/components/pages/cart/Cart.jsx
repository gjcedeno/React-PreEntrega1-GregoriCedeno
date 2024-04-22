import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Button } from "@mui/material";

const Cart = ({ productosAgregados }) => {
  return (
    <Box minHeight="84vh" py={3}> {/* Ajusta el minHeight según sea necesario */}
      <Container maxWidth="md">
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Carrito de Compras
          </Typography>
          <List>
            {productosAgregados.map((producto, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={producto.title}
                  secondary={`Precio: $${producto.price}, Cantidad: ${producto.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          {productosAgregados.length === 0 ? (
            <Typography variant="body1">
              Tu carrito está vacío.
            </Typography>
          ) : (
            <Box mt={3}>
              <Button variant="contained" color="primary">
                Realizar compra
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;