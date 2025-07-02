import { Box, Stack, Typography } from "@mui/material";
import { featured } from "../assets/featuredCardData";
import FeaturedCard from "./FeaturedCard";

function FeaturedDestinations() {
  return (
    <Box pt={7}>
      <Stack alignItems={"center"} spacing={6}>
        <img src="/destination.png" width={70} />
        <Typography
          gutterBottom
          textAlign={"center"}
          fontWeight={900}
          variant="h3"
        >
          Explore Destinations
        </Typography>
      </Stack>
      <Stack
        pt={5}
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "center" }}
        justifyContent="center"
      >
        {featured.map(({ img, locationName, price }, index) => (
          <FeaturedCard
            img={img}
            locationName={locationName}
            price={price}
            key={index}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default FeaturedDestinations;
