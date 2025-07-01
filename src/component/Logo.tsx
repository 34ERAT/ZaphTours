import { Adb } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
      <Stack direction="row" spacing={1} alignItems="center">
        <Adb />
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
          }}
        >
          Zaph Tours
        </Typography>
      </Stack>
    </Link>
  );
}

export default Logo;
