import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CartWidget from "../../common/CartWidget/CartWidget";
import TemporaryDrawer from "../../common/menu/Menu";
import Hidden from "@mui/material/Hidden";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import logo from "/src/assets/img/Logo.png"
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Link to="/">
          <img src={logo} alt="Logo" style={{ width: '50px' }} />
          </Link>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "10px" }}>
            <List component="nav" sx={{ display: "flex", gap: "10px" }}>
              <ListItem disablePadding sx={{ display: "inline-block" }}>
                <ListItemButton>
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                  <Typography variant="button">Ver todo</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "inline-block" }}>
                <ListItemButton>
                <Link to="category/sudaderas" style={{ textDecoration: 'none', color: '#fff' }}>
                  <Typography variant="button">Sudaderas</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "inline-block" }}>
                <ListItemButton>
                <Link to="category/camisetas" style={{ textDecoration: 'none', color: '#fff' }}>
                  <Typography variant="button">Camisetas</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          <Hidden only={["sm", "md", "lg", "xl"]}>
            <TemporaryDrawer />
          </Hidden>

          <IconButton sx={{ color: "#fff" }}>
          <CartWidget />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
