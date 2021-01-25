import React, { useEffect, useState } from "react";
import { ThemeProvider as MuiThemeprovider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import { Grid } from "@material-ui/core";
import AppNavbar from "./componentes/navegacion/AppNavbar";
import { useStateValue } from "./contexto/store";
import { obtenerUsuarioActual } from "./actions/usuarioAction";

function App() {
  const [{sesionUsuario}, dispatch] = useStateValue();
  const [iniciaApp, setIniciaApp] = useState(false);

  useEffect(() =>{
    if (!iniciaApp) {
      obtenerUsuarioActual(dispatch).then(response =>{
        setIniciaApp(true);
      }).catch(error =>{
        setIniciaApp(true);
      });
    }
  }, [iniciaApp])

  return (
    <Router>
      <MuiThemeprovider theme={theme}>
        <AppNavbar/>
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
