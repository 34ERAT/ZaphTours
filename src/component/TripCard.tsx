import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
type Props = {
  heading: string;
  body: string;
  price: number;
  images: string[];
};
function TripCard({ heading, price, body, images }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        maxWidth: "20rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia component={"img"} height={250} image={images[1]} />
      <CardContent>
        <Typography variant="h6" fontWeight={700}>
          {heading}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Button href="#">Learn More</Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default TripCard;
