import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>
      <Badge badgeContent={0} color="error" showZero>
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
};

export default CartWidget;
