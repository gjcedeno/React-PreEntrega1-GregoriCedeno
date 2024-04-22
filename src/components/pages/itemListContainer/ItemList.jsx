import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <Grid container spacing={2} sx={{ padding: '30px'}}>
      {items.map(({ id, title, description, price, img }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
          />
        </Grid>
      ))}
      {error && <h2>{error.message}</h2>}
    </Grid>
  );
};

export default ItemList;