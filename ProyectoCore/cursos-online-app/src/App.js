import React, { useState } from "react";
import Perfil from "./Componentes/Perfil.js"
function App() {
  const [nombre, cambiarNombre] = useState("No tiene nombre");

  function eventoCajaTexto(e){
    cambiarNombre(e.target.value);
  }

  return (
    <div>
      <h1>Welcome de nuevo {nombre}</h1>
      <input type="text" name="nombre" value={nombre} onChange={eventoCajaTexto}/>
      <Perfil miAtributo={nombre}/>
    </div>
  );
}

export default App;
