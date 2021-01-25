export const initialState = {
  usuario: {
    nombreCompleto: "",
    email: "",
    userName: "",
    foto: "",
  },
  autenticado: false,
};

const sessionUsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado,
      };
    case "SALIR_SESION":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado,
      };
    case "ACTUALIZAR_USUARIO":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado,
      }
  }
};

export default sessionUsuarioReducer;