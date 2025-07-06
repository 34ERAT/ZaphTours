import { Box, Container, Stack } from "@mui/material";
import DestionationCard from "./DestionationCard";
import { faker } from "@faker-js/faker/locale/tr";
const items = [
  {
    id: 1,
    name: "lake Nakuru",
    image: "/lakeNakuru.jpg",
  },
  {
    id: 2,
    name: "Diani beach",
    image: "/Diani-Beach-2-scaled.jpg",
  },

  {
    id: 3,
    name: "Amboselil national park",
    image: "/amboseli-national-park.jpg",
  },
  {
    id: 4,
    name: "Maasai Mara",
    image: "/maasaiMara.jpg",
  },

  {
    id: 5,
    name: "Laikipia",
    image: "/laikipia.jpg",
  },
  {
    id: 6,
    name: "Mount kenya",
    image: "/mountkenya.webp",
  },
];
function Destinations() {
  return (
    <Box pt="4.5rem">
      <Container disableGutters>
        <Stack
          direction={"row"}
          gap={4}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {items.map(({ name, image, id }) => (
            <DestionationCard
              key={id}
              soloPrice={faker.number.int({ min: 100, max: 350 })}
              groupCost={faker.number.int({ min: 300, max: 700 })}
              name={name}
              descripion={faker.lorem.sentences(3)}
              image={image}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Destinations;
