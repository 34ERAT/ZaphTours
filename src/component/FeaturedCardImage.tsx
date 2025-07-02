import { Box, CardMedia, IconButton, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function FeaturedCardImage({ img }: { img: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "green",
        maxWidth: "90%",
        position: "relative",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <CardMedia component="img" image={img} />

      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bgcolor: "rgba(0,0,0,.3)",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack direction={"row"} width="100%">
          <IconButton
            size="medium"
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              bgcolor: "#fff",
            }}
          >
            <FavoriteBorderIcon color="primary" fontSize="medium" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default FeaturedCardImage;
