import './ItemListContainer.css';
import { useState } from "react"
import { useEffect } from 'react';
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import Button from '@mui/material/Button';
import { db } from '../../../firebaseConfig';
import {addDoc, collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {

  const {name} = useParams()
  

  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

useEffect(()=>{
const productsCollection = collection(db , "products");
let consulta = productsCollection;

if(name){
consulta = query( productsCollection, where( "category", "==", name ) );
}
getDocs(consulta).then((res)=> {
      let newArray = res.docs.map((doc)=>{
        return {id: doc.id, ...doc.data()}
      })
      setItems(newArray)
  });

}, [name])

if (items.length === 0){
  return <div>
  
  <Box display="flex" flexDirection="column" alignItems="center" mb={4}>

<Box display="flex" justifyContent="center" width="100%" px={1} my={2}>
  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={800} height={70} />
</Box>

<Box display="flex" justifyContent="space-around" width="100%">
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
</Box>
<Box display="flex" justifyContent="space-around" width="100%">
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
</Box>
<Box display="flex" justifyContent="space-around" width="100%">
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
  <Box width={280} m={1}>
    <Skeleton variant="rectangular" sx={{ borderRadius: '5px' }} width={280} height={300} />
  </Box>
</Box>
</Box>



  </div>
}

  return <Box textAlign="center">
          <Typography variant="h3" marginTop={4}>
            Camisetas y Sudaderas de Cine y TV
          </Typography>
          <ItemList items={items} error={error} />
        </Box>
        
  
}

export default ItemListContainer
