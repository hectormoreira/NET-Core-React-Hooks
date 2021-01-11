import {
  Avatar,
  Container,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import style from "../tool/Style";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

const Login = () => {
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
            name="username"
            variant="outlined"
            label="Ingrese username"
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            type="password"
            variant="outlined"
            label="Ingrese password"
            fullWidth
            margin="normal"
          />
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
        </form>
      </div>
    </Container>
  );
};

export default Login;
