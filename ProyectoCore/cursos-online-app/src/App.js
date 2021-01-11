import React from "react";
import { ThemeProvider as MuiThemeprovider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";

function App() {
  return(
    <MuiThemeprovider theme={theme}>
      <PerfilUsuario/>
    </MuiThemeprovider>
  )
}

export default App;
