var botonDesencriptar = document.querySelector("#desencriptar"); //Capturar texto ingresado por el usuario para ser desencriptado

botonDesencriptar.addEventListener("click", () => {
    var textoUsuario = document.querySelector("#encriptarTexto").value;
    var textoDesencriptado = desencriptar(textoUsuario);


    var resultado = document.querySelector("#solucion");
    resultado.value = textoDesencriptado;
    encriptarTexto.focus();
})



function desencriptar(textoUsuario) { //Función para desencriptar texto.
    var textoEncriptado = "";
    for (const expresion in expresiones) {
        textoEncriptado = textoUsuario.replaceAll(expresiones[expresion], expresion);
        //se actualiza el texto del usuario con las modificaciones ya realizadas.
        textoUsuario = textoEncriptado;
    }
    return (textoEncriptado);

}