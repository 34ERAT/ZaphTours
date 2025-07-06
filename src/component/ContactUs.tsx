import {
  EmailOutlined,
  Facebook,
  LocationOnOutlined,
  PhoneEnabledOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <Box height={"100vh"} pt={9}>
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
            <ContactForm />
          </Stack>
        </Grid>
        <Grid size={1}>
          <Stack height={"100%"} width={"100%"} alignItems={"center"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d417536.6949944917!2d36.66364240007926!3d-1.0052869113427925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!3m2!1d-1.2920658999999999!2d36.8219462!4m5!1s0x18289874dd56f1a5%3A0xed3b1918af62f2cd!2sKiharu%2C%20Murang&#39;a!3m2!1d-0.7190474!2d37.148639599999996!5e1!3m2!1sen!2ske!4v1751807122879!5m2!1sen!2ske"
              width="400"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Stack>
        </Grid>
        <Grid size={1}>
          <Stack width={"100%"} alignItems={"flex-start"}>
            <Typography
              variant="h6"
              fontWeight={700}
              textTransform={"capitalize"}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              office hours <Typography color="primary"> 9 am </Typography>
              <hr style={{ width: "2rem", height: 0.5, color: "purple" }} />
              <Typography color="primary"> 10 pm </Typography>
            </Typography>
          </Stack>
          <Stack width={"100%"}>
            <Typography fontWeight={700} variant="h6">
              Follow Us
            </Typography>
            <Stack direction={"column"} alignItems={"flex-start"} p={"0 4rem"}>
              <IconButton>
                <Facebook color="primary" fontSize="large" />
              </IconButton>
              <IconButton>
                <Twitter color="primary" fontSize="large" />
              </IconButton>
              <IconButton>
                <YouTube color="primary" fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
