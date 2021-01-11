import React from "react";
import { ThemeProvider as MuiThemeprovider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";

function App() {
  return(
    <MuiThemeprovider theme={theme}>
      <RegistrarUsuario/>
    </MuiThemeprovider>
  )
}

export default App;
