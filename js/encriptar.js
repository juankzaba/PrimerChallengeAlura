var botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click", () => {


    var areaTexto = document.querySelector("#encriptarTexto");


    encriptarTexto.focus();

    var textoUsuario = areaTexto.value;
    areaTexto.classList.remove("error");





    if (validarTexto(textoUsuario) == false) {
        //encriptado
        var textoEncriptado = encriptar(textoUsuario);
        var resultado = document.querySelector("#solucion");
        resultado.value = textoEncriptado;
    } else {
        areaTexto.value = "";
        areaTexto.classList.add("error");
        areaTexto.placeholder = "Sólo se admite texto en minúscula sin acentos";

    }




})


//Funcion para encriptar texto.
function encriptar(textoUsuario) {
    var textoEncriptado = "";
    for (const expresion in expresiones) {
        textoEncriptado = textoUsuario.replaceAll(expresion, expresiones[expresion]);
        //se actualiza el texto del usuario con las modificaciones ya realizadas.
        textoUsuario = textoEncriptado;
    }
    return (textoEncriptado);

}