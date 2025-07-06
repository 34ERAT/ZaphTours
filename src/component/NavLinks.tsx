import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
function NavLinks({ row }: { row: boolean }) {
  const style = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Stack
      direction={row ? "row" : "column"}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Link to={"/"} style={style}>
        <MuiLink
          component={"p"}
          textTransform="capitalize"
          color="inherit"
          underline="hover"
          variant="h6"
        >
          home
        </MuiLink>
      </Link>
      <Link to={"Destinations"} style={style}>
        <MuiLink
          component={"p"}
          color="inherit"
          underline="hover"
          textTransform="capitalize"
          variant="h6"
        >
          Destinations
        </MuiLink>
      </Link>
      <Link to={"TripTypes"} style={style}>
        <MuiLink
          component={"p"}
          color="inherit"
          underline="hover"
          textTransform="capitalize"
          variant="h6"
        >
          Trip types
        </MuiLink>
      </Link>
      <Link to={"ContactUs"} style={style}>
        <MuiLink
          color="inherit"
          component={"p"}
          underline="hover"
          textTransform="capitalize"
          variant="h6"
        >
          contact Us
        </MuiLink>
      </Link>
    </Stack>
  );
}

export default NavLinks;
