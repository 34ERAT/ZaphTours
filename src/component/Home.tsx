import { Box } from "@mui/material";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import FeaturedDestinations from "./FeaturedDestinations";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";

function Home() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <FeaturedDestinations />
      <Testimonials />
      <NewsLetter />
    </Box>
  );
}

export default Home;
