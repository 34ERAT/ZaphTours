import { Box, Stack, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import TestimonialItem from "./TestimonialItem";
const testimonials = [1, 2, 3];
function Testimonials() {
  return (
    <Box p={5} justifyContent={"center"}>
      <Stack alignItems={"center"} spacing={6}>
        <img src="/rating.png" width={70} />
        <Typography
          gutterBottom
          textAlign={"center"}
          fontWeight={900}
          variant="h3"
        >
          Testimonials
        </Typography>
      </Stack>
      <Stack
        pt={5}
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
      >
        {testimonials.map((index) => {
          return (
            <TestimonialItem
              value={faker.number.int({ min: 3, max: 5 })}
              key={index}
              name={faker.person.fullName()}
              statement={faker.lorem.sentences(4)}
              avatar={faker.image.avatar()}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export default Testimonials;
