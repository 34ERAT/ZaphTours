import { Box } from "@mui/material";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import FeaturedDestinations from "./FeaturedDestinations";

function Home() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <FeaturedDestinations />
    </Box>
  );
}

export default Home;
