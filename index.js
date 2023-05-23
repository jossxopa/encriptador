document.addEventListener('DOMContentLoaded', function() {

  //Encriptar 

  function encriptarTexto () {
    let sustituciones = [
      
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"]
    ];
  
    let textoUsuario = document.getElementById("input-original").value;

    if (/^[a-z\s]*$/.test(textoUsuario)) {
    } else {
      let modal = document.getElementById("modal");
      modal.showModal(); 
      return; 
    };

    let textoPorEncriptar = textoUsuario;
    for (const sustitucion of sustituciones) { // We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.//
      const letra = sustitucion[0]; // es cero porque toma en cuenta los elementos de las vocales, o sea las vocales toman el lugar de 0//
      const sustituta = sustitucion[1]; // es 1 porque 1 es el lugar del indice de las palabras que van a sustituir a 0 //
      textoPorEncriptar = textoPorEncriptar.split(letra).join(sustituta); 
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
      ["ufat", "u"],
      ["ober", "o"],
      ["ai", "a"],
      ["imes", "i"],
      ["enter", "e"] 
      
    ];
  
    let textoConsola = document.getElementById("input-original").value;
    let textoPorDesencriptar = textoConsola;

      for(const sustitucion of sustituciones) {
        const secuenciaEncriptada = sustitucion [0];
        const letraOriginal = sustitucion [1];
      
      textoPorDesencriptar = textoPorDesencriptar.split(secuenciaEncriptada).join(letraOriginal);
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
