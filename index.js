document.addEventListener('DOMContentLoaded', function() {
  /*let textoUsuario = document.getElementById("#input-original").value;
  let textoEncriptador = document.getElementById("resultado-consola");
  let botonEncriptar = document.getElementById("boton-encriptar");
  let botonDesencriptar = document.getElementById("boton-desencriptar");
  let botonCopiar = document.getElementById("boton-copiar");

  let abrirModal = document.getElementById("boton-encriptar");
  let cerrarModal = document.getElementById("btn-cerrarModal");
  let modal = document.getElementById("modal"); */

  function encriptarTexto () {
    let sustituciones = [
      ["a", "ai"],
      ["e", "enter"],
      ["i", "imes"],
      ["o", "ober"],
      ["u", "ufat"]
    ];
  
    let textoUsuario = document.getElementById("input-original").value;
    let textoPorEncriptar = textoUsuario;

    if (/^[a-z\s]*$/.test(textoUsuario)) {
    } else {
      let modal = document.getElementById("modal");
      modal.showModal(); 
      return;
      /*alert("No se puede utilizar acentos, mayúsculas ni ningún tipo de signo")
      return;*/
    };
 
    for (const sustitucion of sustituciones) { // We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.//
      const letra = sustitucion[0]; // es cero porque toma en cuenta los elementos de las vocales, o sea las vocales toman el lugar de 0//
      const sustituta = sustitucion[1]; // es 1 porque 1 es el lugar del indice de las palabras que van a sustituir a 0 //
      textoPorEncriptar = textoPorEncriptar.replace(new RegExp(letra, "img"), sustituta);
    }

    document.getElementById("resultado-consola").value = textoPorEncriptar;
    
  }

  let botonEncriptar = document.getElementById("boton-encriptar");
  botonEncriptar.addEventListener("click", encriptarTexto);

  let cerrarModal = document.getElementById("btn-cerrarModal");
  cerrarModal.addEventListener("click", ()=> {
    let modal = document.getElementById("modal");
    modal.close();
  })

  // Desencriptar 

  function desencriptarTexto () {
    let sustituciones = [
      ["ai", "a"],
      ["enter", "e"],
      ["imes", "i"],
      ["ober", "o"],
      ["ufat", "u"]
    ];
  
    let textoConsola = document.getElementById("input-original").value;
    let textoPorDesencriptar = textoConsola;

    for (let i = sustituciones.length -1; i >=0; i--) {
      const sustitucion = sustituciones [i]; 
      const secuenciaEncriptada = sustitucion[0];
      const letraOriginal = sustitucion[1];
      textoPorDesencriptar = textoPorDesencriptar.replace(new RegExp(secuenciaEncriptada, "img"), letraOriginal);
    }
 
    document.getElementById("resultado-consola").value = textoPorDesencriptar;
    
  }

  let botonDesencriptar = document.getElementById("boton-desencriptar");
  botonDesencriptar.addEventListener("click", desencriptarTexto);


})

/* Copiar texto */ 

function copiarTexto () {
  let copyText = document.getElementById("resultado-consola");
  copyText.select();

  document.execCommand("copy");
    alert("Texto copiado");
  
}
