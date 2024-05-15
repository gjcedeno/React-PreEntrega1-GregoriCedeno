
import { Container, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: "No, quiero seguir con la compra"
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart();
      }
    });
  };

  return (
    <Box minHeight="84vh" py={3}>
      <Container maxWidth="md">
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Carrito de Compras
          </Typography>

          <TableContainer component={Paper}>
            <Table aria-label="tabla de carrito">
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
                      {product.title}
                    </TableCell>
                    <TableCell align="right">${product.price}</TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">
                      <Button onClick={() => deleteById(product.id)} variant="outlined" color="error">
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom mt={2}>
            El total a pagar es: ${total}
          </Typography>

          <Button onClick={clearCartAlert} variant="outlined">Limpiar carrito</Button>
          {
            cart.length > 0 && 
            <Link to="/checkout" style={{ textDecoration: 'none', marginLeft: '8px' }}>
              <Button variant="contained" color="primary">Finalizar Compra</Button>
            </Link>
          }
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;

