import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Box pt={2}>
      <Grid container spacing={{ xs: 2, md: 4 }} m={3} columns={2}>
        <Grid size={{ xs: 2, md: 1 }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            height="25rem"
            borderRadius={3}
          >
            <img
              width="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src="/aboutus.jpg"
            />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 2, md: 1 }}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography
              variant="h3"
              fontWeight={700}
              textTransform="capitalize"
              textAlign={{ xs: "center", md: "left" }}
            >
              We Give the best exprience
            </Typography>
            <Typography
              variant="body1"
              textAlign={{ xs: "center", md: "left" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo nisi maiores repellat, architecto nobis exercitationem
              laboriosam excepturi quae deleniti alias dolorem maxime molestiae
              error ipsum nostrum itaque velit libero aliquam.
            </Typography>
            <Button sx={{ maxWidth: "12rem" }} size="large" variant="contained">
              Learn More
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUs;
