import { Stack, TextField, Button } from "@mui/material";

function ContactForm() {
  return (
    <form>
      <Stack spacing={3} p={"1rem 2rem"}>
        <Stack direction={"row"} spacing={2}>
          <TextField
            sx={{ width: "100%" }}
            required
            variant="outlined"
            label="FirtsName"
          />
          <TextField
            sx={{ width: "100%" }}
            required
            variant="outlined"
            label="LastName"
          />
        </Stack>
        <TextField
          required
          sx={{ width: "100%" }}
          variant="outlined"
          label="Email"
        />

        <TextField
          sx={{ width: "100%" }}
          variant="outlined"
          label="phone (optional)"
        />
        <TextField
          multiline
          sx={{ width: "100%" }}
          variant="outlined"
          label="Type you message"
        />
        <Button variant="contained" sx={{ width: "10rem" }}>
          submit
        </Button>
      </Stack>
    </form>
  );
}

export default ContactForm;
