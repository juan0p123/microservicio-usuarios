function validarUsuario(nombre) {
  if (!nombre) {
    throw new Error("Nombre requerido");
  }
  return true;
}

module.exports = validarUsuario;
