import React, { useEffect, useState } from 'react';
import axios from 'axios'
function Perfil(props){
    const [paises, obtenerPaises] = useState([]);
    const [status, cambiarStatus] = useState(false);


    useEffect(()=>{
       axios.get('https://restcountries.eu/rest/v2/all')
       .then( resultado =>{
           obtenerPaises(resultado.data);
           cambiarStatus(true);
       })
       .catch(erro => {
           cambiarStatus(true);
       })
    },[]);

    if (status) {
        return(
            <ul>
                {paises.map((pais, indice) => 
                    <li key={indice}> {pais.name} </li>
                )}
            </ul>
        );
    }else{
        return(
            <h1>Está cargando los valores del rest services...</h1>
        );
    }
   
}

export default Perfil;
