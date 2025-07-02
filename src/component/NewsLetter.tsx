import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
function NewsLetter() {
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
              width="400rem"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src="/newsletter.png"
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
              Subscribe To Our Newsletter
            </Typography>
            <Typography
              variant="body1"
              textAlign={{ xs: "center", md: "left" }}
            >
              Want to get special offers before they run out? Subscribe to our
              email to get exclusive discounts and offers.
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                required
                variant="filled"
              />
              <Button
                sx={{ maxWidth: "12rem" }}
                size="large"
                variant="contained"
              >
                submit
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewsLetter;
