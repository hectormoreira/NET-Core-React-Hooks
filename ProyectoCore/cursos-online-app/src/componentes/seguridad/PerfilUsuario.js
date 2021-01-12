import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import style from "../tool/Style";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState({
    NombreCompleto: "",
    Password: "",
    ConfirmarPassword: "",
    Email: ""
  })

  const IngresarValores = e =>{
    const {name, value} = e.target;
    setUsuario(anterior => ({
      ...anterior,
      [name]: value
    }))
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
          <Grid item xs={12} md={6}>
            <TextField
              name="NombreCompleto"
              variant="outlined"
              fullWidth
              label="Ingrese nombre y apellidos"
              onChange={IngresarValores}
              value={usuario.NombreCompleto}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="Email"
              variant="outlined"
              fullWidth
              label="Ingrese su email"
              onChange={IngresarValores}
              value={usuario.Email}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="Password"
              variant="outlined"
              type="password"
              fullWidth
              label="Ingrese su password"
              onChange={IngresarValores}
              value={usuario.Password}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="ConfirmarPassword"
              variant="outlined"
              type="password"
              fullWidth
              label="Confirmar su password"
              onChange={IngresarValores}
              value={usuario.ConfirmarPassword}
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
