import { Box, Button, Container, Stack, Typography } from "@mui/material";
function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/heroImage.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottomRightRadius: "3rem",
        borderBottomLeftRadius: "3rem",
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
            variant="h2"
            textAlign="center"
            fontWeight={900}
            sx={{ color: "#ffffff" }}
          >
            Find Youself
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight={900}
            sx={{ color: "#ffffff" }}
            gutterBottom
          >
            outside.
          </Typography>
          <Typography sx={{ color: "#ffffff" }} textAlign="center">
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
