import { Button, Card, CardContent, Typography } from "@mui/material";
import FeaturedCardImage from "./FeaturedCardImage";
type Props = {
  price: number;
  locationName: string;
  img: string;
};

function FeaturedCard({ img, price, locationName }: Props) {
  return (
    <Card
      sx={{
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        maxWidth: { xs: "90%", md: 300 },
        alignItems: "center",
        pt: 2,
      }}
    >
      <FeaturedCardImage img={img} />
      <Button
        variant="contained"
        color="secondary"
        sx={{
          position: "absolute",
          bottom: "3.5rem",
          borderRadius: "1rem",
          boxShadow: 0,
        }}
      >
        <Typography color="primary">{price}</Typography>
      </Button>
      <CardContent>
        <Typography variant="h6" fontWeight={700} color="textPrimary">
          {locationName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeaturedCard;
