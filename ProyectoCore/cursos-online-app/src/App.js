import React, { useEffect, useState } from "react";
import { ThemeProvider as MuiThemeprovider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import { Grid, Snackbar } from "@material-ui/core";
import AppNavbar from "./componentes/navegacion/AppNavbar";
import { useStateValue } from "./contexto/store";
import { obtenerUsuarioActual } from "./actions/usuarioAction";
import RutaSegura from "./componentes/navegacion/RutaSegura";

function App() {
  const [{ sesionUsuario, openSnackbar }, dispatch] = useStateValue();
  const [iniciaApp, setIniciaApp] = useState(false);

  useEffect(() => {
    if (!iniciaApp) {
      obtenerUsuarioActual(dispatch)
        .then((response) => {
          setIniciaApp(true);
        })
        .catch((error) => {
          setIniciaApp(true);
        });
    }
  }, [iniciaApp]);

  return iniciaApp === false ? null : (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{vertical:"bottom", horizontal:"center"}}
        open={openSnackbar ? openSnackbar.open : false}
        autoHideDuration={3000}
        ContentProps={{"aria-describedby":"message-id"}}
        message={
          <span id="message-id">{openSnackbar ? openSnackbar.mensaje : "" }</span>
        }
        onClose={ ()=>
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje:{
              open: false,
              mensaje: ""
            }
          })
        }
      >

      </Snackbar>
      <Router>
        <MuiThemeprovider theme={theme}>
          <AppNavbar />
          <Grid container>
            <Switch>
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/auth/registrar" component={RegistrarUsuario}
              />

              <RutaSegura exact path="/auth/perfil" component={PerfilUsuario} />
              <RutaSegura exact path="/" component={PerfilUsuario} />

            </Switch>
          </Grid>
        </MuiThemeprovider>
      </Router>
    </React.Fragment>
  );
}

export default App;
