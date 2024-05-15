import { Grid, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";



export const CheckoutFormik = () => {
    const {cart, getTotalPrice, clearCart} = useContext(CartContext);
    
    const [orderId, setOrderId] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            state: "",
            address: "",
            zipCode: "",
            
        },
        onSubmit: (values) => {
            const total = getTotalPrice();
            let obj = {
                buyer: values,
                items: cart,
                total: total,
            };
            

            let ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, obj)
                .then(res => {
                    setOrderId(res.id);
                    // Actualizar stock solo después de confirmar el pedido
                    cart.forEach((product) => {
                        let refDoc = doc(db, "products", product.id);
                        updateDoc(refDoc, { stock: product.stock - product.quantity });
                    });
                    clearCart()
                })
                .catch(err => {
                    console.error("Error al guardar el pedido:", err);
                });
        },
        validationSchema: Yup.object({
            name: Yup.string().required("El campo es obligatorio").min(3),
            email: Yup.string().required("El campo es obligatorio").email("El email no es valido"),
            phone: Yup.string().required("El campo es obligatorio"),
            country: Yup.string().required("El campo es obligatorio"),
            city: Yup.string().required("El campo es obligatorio"),
            state: Yup.string().required("El campo es obligatorio"),
            address: Yup.string().required("El campo es obligatorio"),
            zipCode: Yup.string().required("El campo es obligatorio"),
        }),
        validateOnChange: false
    });

    return (
        <div>
        {orderId ? (
            <div style={{ textAlign: 'center', marginTop: '100px' }}> 
                <h1 style={{ color: 'green' }}> {/* Añade color verde aquí */}
                    ¡Gracias por tu compra! Tu pedido ha sido realizado con éxito!<br /><br />
                </h1>
                <h2>Su número de pedido es: {orderId}</h2>
            </div>

            ) : (
                <form onSubmit={formik.handleSubmit}>

                    <Grid container spacing={2} justifyContent="flex-start" marginTop={15} paddingLeft={10}> 
                    <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                Datos y dirección de envío
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                        
                            <Grid container spacing={2} sx={{ maxWidth: '50%' }}> 
                            
                                <Grid item xs={12} md={6}>
                                    
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.errors.email ? true : false}
                                        helperText={formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Nombre y Apellido"
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        error={formik.errors.name ? true : false}
                                        helperText={formik.errors.name}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Teléfono"
                                        name="phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        error={formik.errors.phone ? true : false}
                                        helperText={formik.errors.phone}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="País"
                                        name="country"
                                        onChange={formik.handleChange}
                                        value={formik.values.country}
                                        error={formik.errors.country ? true : false}
                                        helperText={formik.errors.country}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Ciudad"
                                        name="city"
                                        onChange={formik.handleChange}
                                        value={formik.values.city}
                                        error={formik.errors.city ? true : false}
                                        helperText={formik.errors.city}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Estado/Provincia"
                                        name="state"
                                        onChange={formik.handleChange}
                                        value={formik.values.state}
                                        error={formik.errors.state ? true : false}
                                        helperText={formik.errors.state}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Dirección"
                                        name="address"
                                        onChange={formik.handleChange}
                                        value={formik.values.address}
                                        error={formik.errors.address ? true : false}
                                        helperText={formik.errors.address}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Código Postal"
                                        name="zipCode"
                                        onChange={formik.handleChange}
                                        value={formik.values.zipCode}
                                        error={formik.errors.zipCode ? true : false}
                                        helperText={formik.errors.zipCode}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Realizar Pedido
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            )}
        </div>
    );}
    