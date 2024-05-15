import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {

  const {getTotalItems} = useContext(CartContext)
  let total = getTotalItems()

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>
      <Badge badgeContent={total} color="error" showZero>
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
};

export default CartWidget;
