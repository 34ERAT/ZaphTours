import { Box, Button, Container, Stack, Typography } from "@mui/material";
function Hero() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://yellowzebrasafaris.com/media/gx3o5yvr/fly-camping-kicheche-bush-camp-greater-mara-conservancies-kenya.jpg?rxy=0.5075150071260686%2C0.8362877070446325&width=2048&height=1024&format=jpg&v=1db7641a2995070)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottomRightRadius: "4rem",
        borderBottomLeftRadius: "4rem",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        component="div"
        sx={{
          width: "100%",
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
          width="35rem"
        >
          <Typography
            color="textSecondary"
            variant="h2"
            textAlign="center"
            fontWeight={900}
          >
            Find Youself
          </Typography>
          <Typography
            color="textSecondary"
            variant="h2"
            textAlign="center"
            fontWeight={900}
            gutterBottom
          >
            outside.
          </Typography>
          <Typography color="textSecondary" textAlign="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            suscipit enim dolore voluptatem. Corporis, quasi sunt!{" "}
          </Typography>
          <Button
            variant="contained"
            sx={{ maxWidth: "10rem", borderRadius: "2rem" }}
          >
            Discover
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
