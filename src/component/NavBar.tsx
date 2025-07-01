import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ background: "transparent" }}>
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Logo />
              <NavLinks />
              <Button variant="outlined" color="inherit">
                Get started
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default NavBar;
