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


export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#650606" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <img src={logo} alt="Logo" style={{ width: '50px' }} />

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "10px" }}>
            <List component="nav" sx={{ display: "flex", gap: "10px" }}>
              <ListItem disablePadding sx={{ display: "inline-block" }}>
                <ListItemButton>
                  <Typography variant="button">Camisetas</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "inline-block" }}>
                <ListItemButton>
                  <Typography variant="button">Pantalones</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "inline-block" }}>
                <ListItemButton>
                  <Typography variant="button">Accesorios</Typography>
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
