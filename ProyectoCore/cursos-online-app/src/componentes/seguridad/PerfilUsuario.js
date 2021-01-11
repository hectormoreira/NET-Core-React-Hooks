import React from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import style from "../tool/Style";

const PerfilUsuario = () => {
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
              name="nombreCompleto"
              variant="outlined"
              fullWidth
              label="Ingrese nombre y apellidos"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              label="Ingrese su email"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="password"
              variant="outlined"
              type="password"
              fullWidth
              label="Ingrese su password"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="confirmePassword"
              variant="outlined"
              type="password"
              fullWidth
              label="Confirma su password"
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
