import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NavLinks() {
  const style = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Link to={"/"} style={style}>
        <Typography textTransform="capitalize" variant="h6">
          home
        </Typography>
      </Link>
      <Link to={"Destinations"} style={style}>
        <Typography textTransform="capitalize" variant="h6">
          Destinations
        </Typography>
      </Link>
      <Link to={"TripTypes"} style={style}>
        <Typography textTransform="capitalize" variant="h6">
          Trip types
        </Typography>
      </Link>
      <Link to={"ContactUs"} style={style}>
        <Typography textTransform="capitalize" variant="h6">
          contact Us
        </Typography>
      </Link>
    </Stack>
  );
}

export default NavLinks;
