import {
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { useStateValue } from "../../../contexto/store";
import fotoUsuarioTemp from "../../../logo.svg";

const useStyle = makeStyles((theme) => ({
  seccionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  seccionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  avatarSize: {
    width: 40,
    height: 40,
  },
}));

const BarSesion = () => {
  const classes = useStyle();

  const [{sesionUsuario}, dispatch] = useStateValue();

  return (
    <Toolbar>
      <IconButton color="inherit">
        <i className="material-icons">menu</i>
      </IconButton>
      <Typography variant="h6">Cursos Online</Typography>
      <div className={classes.grow}></div>

      <div className={classes.seccionDesktop}>
        <Button color="inherit">Salir</Button>
        <Button color="inherit">{sesionUsuario ? sesionUsuario.usuario.nombreCompleto : ""}</Button>
        <Avatar src={fotoUsuarioTemp}></Avatar>
      </div>

      <div className={classes.seccionMobile}>
          <IconButton color="inherit">
              <i className="material-icons">more_vert</i>
          </IconButton>
      </div>
    </Toolbar>
  );
};

export default BarSesion;
