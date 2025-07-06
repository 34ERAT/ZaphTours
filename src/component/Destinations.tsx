import { Box, Container, Stack } from "@mui/material";
import DestionationCard from "./DestionationCard";
import { faker } from "@faker-js/faker/locale/tr";
import { destinations } from "../assets/Destinations";
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
          {destinations.map(({ name, image, id }) => (
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
