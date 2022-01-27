var botonCopiar = document.querySelector("#copiar");


botonCopiar.addEventListener("click", () => {
    var textoCopiado = document.querySelector("#solucion").value;
    navigator.clipboard.writeText(textoCopiado);
    encriptarTexto.focus();
});