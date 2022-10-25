import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  margin: 1rem;
  position: relative;
  &:hover {
    color: white;
  }
  &:focus {
    color: white;
  }
`;

const StyledLink2 = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: black;
  }
`;

const drawerWidth = 240;

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SKILL HUNT
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <StyledLink2 to="/">HOME</StyledLink2>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <StyledLink2 to="/company">COMPANY PROFILE</StyledLink2>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <StyledLink2 to="/contactUs">CONTACT US</StyledLink2>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <StyledLink2 to="/logIn">LOG IN</StyledLink2>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <StyledLink2 to="/register">REGISTER</StyledLink2>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "8vh" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="d-flex flex-grow-1 align-items-center">
            <h6 className="title">// SKILLHUNT</h6>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List>
              <StyledLink to="/">HOME</StyledLink>
              <StyledLink to="/company">COMPANY PROFILE</StyledLink>
              <StyledLink to="/contactUs">CONTACT US</StyledLink>
              <StyledLink to="/logIn">LOG IN</StyledLink>
              <StyledLink to="/register">REGISTER</StyledLink>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}
