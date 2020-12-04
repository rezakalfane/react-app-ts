import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Timer } from "./Timer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

export function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Products Spotlight
        </Typography>
        <FormControl>
          <Grid item>
            <TextField
              margin="dense"
              fullWidth
              id="standard-helperText"
              label="Search terms"
              variant="standard"
              helperText="Some important text"
            />
          </Grid>
          <Grid item>
            <TextField
              margin="dense"
              fullWidth
              disabled
              id="standard-helperText"
              label="Search terms"
              variant="standard"
              helperText="Some important text"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              margin="dense"
              id="standard-helperText"
              label="Search terms"
              variant="filled"
              helperText="Some important text"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              margin="dense"
              id="standard-helperText"
              label="Search terms"
              variant="outlined"
              helperText="Some important text"
            />
          </Grid>
          <Grid item>
            <Button>Search</Button>
            <Button color="secondary">Search</Button>
            <Button color="primary" variant="outlined">
              Search
            </Button>
            <Button color="secondary" variant="outlined">
              Search
            </Button>
            <Button color="primary" disableElevation variant="contained">
              Search
            </Button>
            <Button
              disabled
              color="secondary"
              disableElevation
              variant="contained"
            >
              Search
            </Button>
          </Grid>
        </FormControl>
        <Box sx={{ m: 4 }}>
          <Timer initialValue={100} />
        </Box>
        <Typography variant="h1" component="div" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom component="div">
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom component="div">
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
    </Container>
  );
}
