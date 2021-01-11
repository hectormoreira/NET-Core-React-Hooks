import HttpCliente from '../servicios/HttpCliente';

export const registrarUsuario = usuario =>{
    return new Promise((resolve, eject) =>{
        HttpCliente.post('/usuario/registrar', usuario).then(response =>{
            resolve(response);
        })
    })
}