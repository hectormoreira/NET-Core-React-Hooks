import {
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
  Drawer,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import React, { useState } from "react";
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
  list:{
    width: 250
  },
  listItemText:{
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color:"#212121"
  }
}));

const BarSesion = () => {
  const classes = useStyle();
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [abrirMenu, setAbrirMenu] = useState(false);

  const cerrarMenu = () => {
    setAbrirMenu(false);
  }

  const abrirMenuAction = () => {
    setAbrirMenu(true);
  }

  return (
    <React.Fragment>
      <Drawer
        open={abrirMenu}
        onClose={cerrarMenu}
        anchor="left"
      >
        <div className={classes.list} onKeyDown={cerrarMenu} onClick={cerrarMenu}>
          <List>
            <ListItem button>
              <i className="material-icons">account_box</i>
              <ListItemText className={{primary: classes.listItemText}} primary="Perfil" />
            </ListItem>
          </List>
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
          <IconButton color="inherit">
            <i className="material-icons">more_vert</i>
          </IconButton>
        </div>
      </Toolbar>
    </React.Fragment>
  );
};

export default BarSesion;
