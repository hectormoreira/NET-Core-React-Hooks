import {
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
  Drawer,
} from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../../../contexto/store";
import fotoUsuarioTemp from "../../../logo.svg";
import { Menu } from "./Menu";
import { MenuDerecha } from "./MenuDerecha";

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
  list: {
    width: 250,
  },
  listItemText: {
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color: "#212121",
  },
}));

const BarSesion = (props) => {
  const classes = useStyle();
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [abrirMenuDerecha, setAbrirMenuDerecha] = useState(false);

  const cerrarMenu = () => {
    setAbrirMenu(false);
  };

  const abrirMenuAction = () => {
    setAbrirMenu(true);
  };

  const cerrarMenuDerecha = () => {
    setAbrirMenuDerecha(false);
  };

  const abrirMenuDerechaAction = () => {
    setAbrirMenuDerecha(true);
  };

  const salirSesionApp = () => {
    localStorage.removeItem("token_seguridad");
    props.history.push("/auth/login");
  };

  return (
    <React.Fragment>
      <Drawer open={abrirMenu} onClose={cerrarMenu} anchor="left">
        <div
          className={classes.list}
          onKeyDown={cerrarMenu}
          onClick={cerrarMenu}
        >
          <Menu classes={classes} />
        </div>
      </Drawer>

      <Drawer
        open={abrirMenuDerecha}
        onClose={cerrarMenuDerecha}
        anchor="right"
      >
        <div
          role="button"
          className={classes.list}
          onKeyDown={cerrarMenuDerecha}
          onClick={cerrarMenuDerecha}
        >
          <MenuDerecha 
            classes={classes}
            salirSesion={salirSesionApp}
            usuario={sesionUsuario ? sesionUsuario.usuario : null}
          />
        </div>
      </Drawer>

      <Toolbar>
        <IconButton color="inherit" onClick={abrirMenuAction}>
          <i className="material-icons">menu</i>
        </IconButton>

        <Typography variant="h6">Cursos Online</Typography>
        <div className={classes.grow}></div>

        <div className={classes.seccionDesktop}>
          <Button color="inherit">Salir</Button>
          <Button color="inherit">
            {sesionUsuario ? sesionUsuario.usuario.nombreCompleto : ""}
          </Button>
          <Avatar src={fotoUsuarioTemp}></Avatar>
        </div>

        <div className={classes.seccionMobile}>
          <IconButton color="inherit" onClick={abrirMenuDerechaAction}>
            <i className="material-icons">more_vert</i>
          </IconButton>
        </div>
      </Toolbar>
    </React.Fragment>
  );
};

export default withRouter(BarSesion);
