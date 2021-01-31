import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@material-ui/core";
import style from "../tool/Style";
import { actualizarUsuario } from "../../actions/usuarioAction";
import { useStateValue } from "../../contexto/store";
import reactFoto from "../../logo.svg";
import { v4 as uuidv4 } from "uuid";
import ImageUploader from "react-images-upload";
import { obtenerDataImagen } from "../../actions/imagenAction";

const PerfilUsuario = () => {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    password: "",
    confirmarPassword: "",
    email: "",
    userName: "",
    imagenPerfil: null,
    fotoUrl: "",
  });

  const IngresarValores = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUsuario(sesionUsuario.usuario);
    setUsuario((anterior) => ({
      ...anterior,
      fotoUrl: sesionUsuario.usuario.imagenPerfil,
      imagenPerfil: null,
    }));
    console.log("usuario ", sesionUsuario.usuario);
  }, []);

  const guardarUsuario = (e) => {
    e.preventDefault();
    actualizarUsuario(usuario, dispatch).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            mensaje:
              "Se guardaron exitosamente los cambios en Perfil de usuario",
          },
        });
        window.localStorage.setItem("token_seguridad", response.data.token);
      } else {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            mensaje:
              "Errores al intentar guardar en: " +
              Object.keys(response.data.errors),
          },
        });
      }
    });
  };

  const fotoKey = uuidv4();

  const subirFoto = (imagenes) => {
    const foto = imagenes[0];
    const fotoUrl = URL.createObjectURL(foto);

    obtenerDataImagen(foto).then((respuesta) => {
      console.log("respuesta", respuesta);
      setUsuario((anterior) => ({
        ...anterior,
        imagenPerfil: respuesta, //response json desde action {data:..., nombre:..., extension:...}
        fotoUrl: fotoUrl, // formato url
      }));
    });
  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Avatar
          style={style.avatar}
          src={usuario.fotoUrl || reactFoto}
        ></Avatar>
        <Typography component="h1" variant="h5">
          Perfil de usuario
        </Typography>

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

            <Grid item xs={12} md={12}>
              <ImageUploader
                withIcon={false}
                key={fotoKey}
                singleImage={true}
                buttonText="Seleccione imagen de perfil"
                onChange={subirFoto}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                maxFileSize={5242880}
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
      </div>
    </Container>
  );
};

export default PerfilUsuario;
