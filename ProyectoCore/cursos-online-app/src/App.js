import React from "react";
import MuiThemeprovider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import { Button, TextField } from "@material-ui/core";

function App() {
  return(
    <MuiThemeprovider theme={theme}>
      <h1>Proyecto vacío</h1>
      <TextField variant="outlined" />
      <Button variant="contained" color="primary"> Mi boton material </Button>
    </MuiThemeprovider>
  )
}

export default App;
