import React from "react";
import { ThemeProvider as MuiThemeprovider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import Login from "./componentes/seguridad/Login";

function App() {
  return(
    <MuiThemeprovider theme={theme}>
      <Login/>
    </MuiThemeprovider>
  )
}

export default App;
