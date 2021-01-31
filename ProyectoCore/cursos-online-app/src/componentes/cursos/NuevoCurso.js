import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import style from '../tool/Style';

const NuevoCurso = () => {
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de nuevo curso
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="Titulo"
                                variant="outlined"
                                fullWidth
                                label="Ingrese Titulo"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="Descripcion"
                                variant="outlined"
                                fullWidth
                                label="Ingrese Descripcion"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="Precio"
                                variant="outlined"
                                fullWidth
                                label="Ingrese Precio normal"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="Promocion"
                                variant="outlined"
                                fullWidth
                                label="Ingrese Precio Promocion"
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
                               Guardar curso
                           </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default NuevoCurso;