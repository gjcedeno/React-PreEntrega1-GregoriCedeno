import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Cart from "./Cart"


const CartContainer = () => {
    
    
    const {cart, clearCart, deleteById, getTotalPrice} = useContext (CartContext)
    let total = getTotalPrice()

  return <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} total={total}/>
}

export default CartContainer