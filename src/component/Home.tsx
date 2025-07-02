import { Box } from "@mui/material";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import FeaturedDestinations from "./FeaturedDestinations";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <FeaturedDestinations />
      <Testimonials />
    </Box>
  );
}

export default Home;
