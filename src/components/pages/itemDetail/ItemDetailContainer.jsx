import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import Swal from 'sweetalert2'
import { db } from "../../../firebaseConfig"
import {collection, doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {

   const {id} = useParams()

   const [item, setItem] = useState({})

   const {addToCart, getQuantitybyId} = useContext(CartContext)

   let initial = getQuantitybyId(+id)

   useEffect(()=>{

    let productsCollection = collection( db, "products")
    let refDoc = doc(productsCollection, id)
    getDoc(refDoc).then(res => {
      setItem({id:res.id, ...res.data()})
    })
   }, [id])
   
   const onAdd = (cantidad) => {
  
      let product = {...item, quantity: cantidad}

      addToCart(product)

      Swal.fire({
        position: "center",
  icon: "success",
  title: "Se agrego el producto",
  showConfirmButton: false,
  timer: 1000
      })
   };
    
  return <ItemDetail item={item} onAdd={onAdd} initial={initial}/>
}

export default ItemDetailContainer