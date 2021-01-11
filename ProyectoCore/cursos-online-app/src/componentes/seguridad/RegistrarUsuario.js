import React from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import style from "../tool/Style";

const RegistrarUsuario = () => {
  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          Registro de Usuario
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="nombreCompleto"
                variant="outlined"
                fullWidth
                label="Ingrese su nombre y apellidos"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                label="Ingrese su email"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="username"
                variant="outlined"
                fullWidth
                label="Ingrese su username"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                label="Ingrese su password"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="confirmacionPassword"
                type="password"
                variant="outlined"
                fullWidth
                label="Confirme su password"
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
