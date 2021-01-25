const initialState = {
  open: false,
  mesaje: "",
};

const openSnackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        ...state,
        open: action.openMensaje.open,
        mensaje: action.openMensaje.mensaje
      };
    default:
      return state;
  }
};

export default openSnackbarReducer;