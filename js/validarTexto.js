function validarTexto(texto) { //Validar ingreso de texto
    console.log(texto)

    var mayusculas = /[A-Z]/g;
    var caracteresEspeciales = /[áéíóú]/g;

    if (texto.match(mayusculas)) {
        return true;
    } else if (texto.match(caracteresEspeciales)) {
        return true;
    } else {
        return false;
    }



}