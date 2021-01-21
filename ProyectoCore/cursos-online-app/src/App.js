import React from "react";
import { ThemeProvider as MuiThemeprovider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Router>
      <MuiThemeprovider theme={theme}>
        <Grid container>
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/registrar" component={RegistrarUsuario} />
            <Route exact path="/auth/perfil" component={PerfilUsuario} />
            <Route exact path="/" component={PerfilUsuario} />
          </Switch>
        </Grid>
      </MuiThemeprovider>
    </Router>
  );
}

export default App;
