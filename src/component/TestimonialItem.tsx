import { Paper, Avatar, Typography, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
type props = {
  name: string;
  statement: string;
  avatar: string;
  value: number;
};
function TestimonialItem({ name, value, avatar: avater, statement }: props) {
  return (
    <Paper
      sx={{
        pt: 2,
        pb: 2,
        width: "20rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: ".5rem",
        gap: 1,
      }}
    >
      <Avatar src={avater} sx={{ width: 100, height: 100 }} />
      <Typography
        variant="subtitle1"
        fontWeight={900}
        textTransform={"capitalize"}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        width={250}
        textAlign={"center"}
      >
        <FormatQuoteIcon sx={{ rotate: "180deg" }} />
        {statement}
      </Typography>
      <Rating name="company-rating" value={value} readOnly />
    </Paper>
  );
}

export default TestimonialItem;
