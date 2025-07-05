import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneEnabledOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

function ContactUs() {
  return (
    <Box height={"100vh"}>
      <Grid container columns={{ xs: 1, md: 2 }} height={"100%"}>
        <Grid size={1}>
          <Stack
            spacing={2}
            height={"100%"}
            p={"1rem 2rem"}
            justifyContent={"center"}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              textAlign={"left"}
              textTransform={"capitalize"}
            >
              Contact Us
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium ex perferendis assumenda rem!
            </Typography>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <PhoneEnabledOutlined color="primary" fontSize="large" />
                <Typography variant="h6">4843242400</Typography>
              </Stack>

              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <EmailOutlined color="primary" fontSize="large" />
                <Typography variant="h6">info@zaphTours.com</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <LocationOnOutlined color="primary" fontSize="large" />
                <Typography variant="h6">
                  15 West 3rd St. Media, pa.1go63
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={1}>
          <Stack height={"100%"} justifyContent={"center"}>
            <form>
              <Stack spacing={3} p={"1rem 2rem"}>
                <Stack direction={"row"} spacing={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    variant="outlined"
                    label="FirtsName"
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    variant="outlined"
                    label="LastName"
                  />
                </Stack>
                <TextField
                  required
                  sx={{ width: "100%" }}
                  variant="outlined"
                  label="Email"
                />

                <TextField
                  sx={{ width: "100%" }}
                  variant="outlined"
                  label="phone (optional)"
                />
                <TextField
                  multiline
                  sx={{ width: "100%" }}
                  variant="outlined"
                  label="Type you message"
                />
                <Button variant="contained" sx={{ width: "10rem" }}>
                  submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
