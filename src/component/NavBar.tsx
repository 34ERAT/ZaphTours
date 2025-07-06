import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box>
        <AppBar position="fixed" color="secondary">
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Logo />
              <Stack sx={{ display: { xs: "none", md: "flex" } }}>
                <NavLinks row={true} />
              </Stack>

              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpen(true)}
              >
                {open ? (
                  <MenuOpenIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </IconButton>
              <Button
                sx={{ display: { xs: "none", md: "flex" } }}
                variant="outlined"
                color="inherit"
              >
                Get started
              </Button>
              <Drawer
                anchor="right"
                sx={{ p: 4 }}
                open={open}
                onClick={() => setOpen(false)}
              >
                <Stack sx={{ display: { xs: "flex", md: "none" }, p: 4 }}>
                  <NavLinks row={false} />
                </Stack>
              </Drawer>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default NavBar;
