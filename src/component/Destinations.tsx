import { Box, Container, Stack } from "@mui/material";
import DestionationCard from "./DestionationCard";
import { faker } from "@faker-js/faker/locale/tr";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
          {items.map((index) => (
            <DestionationCard
              key={index}
              soloPrice={faker.number.int({ min: 100, max: 350 })}
              groupCost={faker.number.int({ min: 300, max: 700 })}
              name={faker.lorem.words(3)}
              descripion={faker.lorem.sentences(3)}
              image={faker.image.avatar()}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Destinations;
