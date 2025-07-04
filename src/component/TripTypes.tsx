import { Box, Container, Stack } from "@mui/material";
import TripCard from "./TripCard";
import { faker } from "@faker-js/faker/locale/tr";
const triptypes = [
  "honeymoon",
  "family",
  "adventure",
  "cultural tours",
  "wildlife safaris,",
  " eco-tours",
  "luxury vacations",
  " beach holidays",
  "wellness retreats",
  "culinary tours",
];
const imageList = [1, 2];
function TripTypes() {
  return (
    <Box mt={"6rem"}>
      <Container disableGutters>
        <Stack
          direction={"row"}
          gap={4}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {triptypes.map((heading: string, index: number) => (
            <TripCard
              heading={heading}
              body={faker.lorem.paragraph(4)}
              key={index}
              price={faker.number.int({ min: 200, max: 700 })}
              images={imageList.map(() => "/heroImage.jpg")}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default TripTypes;
