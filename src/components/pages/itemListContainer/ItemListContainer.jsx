import './ItemListContainer.css';
import { useState } from "react"
import { useEffect } from 'react';
import { products } from "../../../productsMock"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';


const ItemListContainer = () => {

  const {name} = useParams()
  console.log(name)

  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

useEffect(()=>{

  let productsFiltered = products.filter(product => product.category === name)

  const getProducts = new Promise ((resolve, reject)=>{
    let x = true;

    if(x){
      setTimeout(() => {
        resolve(name ? productsFiltered : products)
      }, 100);
    } else {
      reject({status: 400, message: "algo salio mal"})
    }
  })

  getProducts.then((res)=>setItems(res)).catch((error)=>setError(error))
}, [name])


  return <Box textAlign="center">
          <Typography variant="h3" marginTop={4}>
            Camisetas y Sudaderas de Cine y TV
          </Typography>
          <ItemList items={items} error={error} />
        </Box>
  
}

export default ItemListContainer


