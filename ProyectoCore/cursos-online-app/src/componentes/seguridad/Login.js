import {
  Avatar,
  Container,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import style from "../tool/Style";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { loginUsuario } from "../../actions/usuarioAction";

const Login = () => {
  const [usuario, setUsuario] = useState({
    Email: '',
    Password: ''
  });

  const IngresarValores = e =>{
    const {name, value} = e.target;
    setUsuario(anterior => ({
      ...anterior,
      [name]: value
    }));
  }

  const login = e =>{
    e.preventDefault();
    loginUsuario(usuario).then(response =>{
      console.log('Login exitoso >>> ', usuario);
      window.localStorage.setItem("token_seguridad", response.data.token);
    })
  }

  return (
    <Container maxWidth="xs">
      <div style={style.paper}>
        <Avatar style={style.avatar}>
          <LockOutlinedIcon style={style.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login de usuario
        </Typography>
        <form style={style.form}>
          <TextField
            name="Email"
            variant="outlined"
            label="Ingrese username"
            fullWidth
            margin="normal"
            onChange={IngresarValores}
            value={usuario.Email}
          />
          <TextField
            name="Password"
            type="password"
            variant="outlined"
            label="Ingrese password"
            fullWidth
            margin="normal"
            onChange={IngresarValores}
            value={usuario.Password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={style.submit}
            onClick={login}
          >
            Enviar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
