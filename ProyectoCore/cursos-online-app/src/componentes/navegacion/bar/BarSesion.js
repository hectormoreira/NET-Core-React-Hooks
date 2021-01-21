import { IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const BarSesion = () => {
    return (
        <Toolbar>
            <IconButton color="inherit">
                <i className="material-icons">menu</i>
            </IconButton>
            <Typography variant="h6">Cursos Online</Typography>
        </Toolbar>
    );
};

export default BarSesion;