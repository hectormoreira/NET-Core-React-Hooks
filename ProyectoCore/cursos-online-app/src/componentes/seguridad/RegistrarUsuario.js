import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import style from "../tool/Style";
import { registrarUsuario } from "../../actions/usuarioAction";

const RegistrarUsuario = () => {
  const [usuario, setUsuario] = useState({
    NombreCompleto: "",
    Password: "",
    ConfirmarPassword: "",
    Username: "",
    Email: ""
  });

  const ingresarValores = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const registrarUsuarioBtn = (e) => {
    e.preventDefault();
    registrarUsuario(usuario).then((response) => {
      console.log("Usuario registrado", response);
      window.localStorage.setItem("token_seguridad", response.data.token);
    });

  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          Registro de Usuario
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="NombreCompleto"
                variant="outlined"
                fullWidth
                label="Ingrese su nombre y apellidos"
                value={usuario.NombreCompleto}
                onChange={ingresarValores}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="Email"
                type="email"
                variant="outlined"
                fullWidth
                label="Ingrese su email"
                value={usuario.Email}
                onChange={ingresarValores}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="Username"
                variant="outlined"
                fullWidth
                label="Ingrese su username"
                value={usuario.Username}
                onChange={ingresarValores}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="Password"
                type="password"
                variant="outlined"
                fullWidth
                label="Ingrese su password"
                value={usuario.Password}
                onChange={ingresarValores}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="ConfirmarPassword"
                type="password"
                variant="outlined"
                fullWidth
                label="Confirme su password"
                value={usuario.ConfirmarPassword}
                onChange={ingresarValores}
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
                onClick={registrarUsuarioBtn}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegistrarUsuario;
