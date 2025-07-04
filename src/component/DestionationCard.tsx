import BoyIcon from "@mui/icons-material/Boy";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
type Props = {
  image: string;
  name: string;
  descripion: string;
  groupCost: number;
  soloPrice: number;
};
function DestionationCard({
  image,
  name,
  descripion,
  groupCost,
  soloPrice,
}: Props) {
  //TODO: align the action buttons at the bottom of the container
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        maxWidth: "20rem",
      }}
    >
      <CardMedia component={"img"} height={250} image={image} />
      <CardContent>
        <Typography variant="h6" fontWeight={700}>
          {name}
        </Typography>
        <Typography variant="body2">{descripion}</Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Button href="#">Learn More</Button>

          <Button variant="outlined" startIcon={<BoyIcon fontSize="large" />}>
            ${soloPrice}
          </Button>
          <Button startIcon={<GroupsIcon />} variant="contained">
            ${groupCost}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default DestionationCard;
