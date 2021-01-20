import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import style from "../tool/Style";
import { actualizarUsuario, obtenerUsuarioActual } from "../../actions/usuarioAction";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    password: "",
    confirmarPassword: "",
    email: "",
    userName: ""
  })

  const IngresarValores = e =>{
    const {name, value} = e.target;
    setUsuario(anterior => ({
      ...anterior,
      [name]: value
    }));
  }

  useEffect(() =>{
    obtenerUsuarioActual().then(response =>{
      console.log("data del usuario actual ", response);
      setUsuario(response.data);
    });
  }, [])

  const guardarUsuario = e =>{
    e.preventDefault();
    actualizarUsuario(usuario).then(response =>{
      console.log("usuario actualizado ", usuario);
      window.localStorage.setItem("token_seguridad", response.data.token);
    })
  }

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          Perfil de usuario
        </Typography>
      </div>
      <form style={style.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              name="nombreCompleto"
              variant="outlined"
              fullWidth
              label="Ingrese nombre y apellidos"
              onChange={IngresarValores}
              value={usuario.nombreCompleto}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="userName"
              variant="outlined"
              fullWidth
              label="Ingrese su username"
              onChange={IngresarValores}
              value={usuario.userName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              label="Ingrese su email"
              onChange={IngresarValores}
              value={usuario.email}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="password"
              variant="outlined"
              type="password"
              fullWidth
              label="Ingrese su password"
              onChange={IngresarValores}
              value={usuario.password}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="confirmarPassword"
              variant="outlined"
              type="password"
              fullWidth
              label="Confirmar su password"
              onChange={IngresarValores}
              value={usuario.confirmarPassword}
            />
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary" 
              size="large"
              style={style.submit}
              onClick={guardarUsuario}
            >
              Guardar datos
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PerfilUsuario;
