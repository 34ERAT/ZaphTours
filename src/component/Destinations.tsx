import { Box, Container, Stack } from "@mui/material";
import DestionationCard from "./DestionationCard";
import { faker } from "@faker-js/faker/locale/tr";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Destinations() {
  return (
    <Box pt="4.5rem">
      <Container disableGutters maxWidth="xl">
        <Stack direction={"row"} justifyContent={"center"} flexWrap={"wrap"}>
          {items.map((index) => (
            <DestionationCard
              key={index}
              soloPrice={Math.ceil(Math.random() * 150)}
              groupCost={Math.ceil(Math.random() * 400)}
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
