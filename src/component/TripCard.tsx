import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
type Props = {
  heading: string;
  body: string;
  price: number;
  images: string[];
};
function TripCard({ heading, price, body, images }: Props) {
  const [page, setPage] = useState(0);
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
      <CardMedia component={"img"} height={250} image={images[page]} />
      <CardActions>
        <Stack direction={"row"} p={1} width={"100%"} justifyContent={"center"}>
          <Pagination
            onChange={(_event, page) => setPage(page - 1)}
            count={3}
            color="primary"
            variant="outlined"
            size="small"
            hidePrevButton
            hideNextButton
          />
        </Stack>
      </CardActions>
      <CardContent>
        <Typography color="textSecondary" variant="h6" fontWeight={700}>
          {heading}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Button startIcon={<CurrencyExchangeIcon />} variant="contained">
            {price}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default TripCard;
