const textoIngresado = document.getElementById("input");
const textoResultado = document.getElementById("txtSalida");
const btnEncriptar = document.getElementById("botonEncriptar");
const btnDesencriptar = document.getElementById("botonDesencriptar");
const btnCopiar = document.getElementById("botoncopiar");

/* declaro patron para encriptar*/
const patrones = {
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "a": "ai",
  "u": "ufat"
};

/* declaro patron para desencriptar*/
const patrones2 = {
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ai": "a",
  "ufat": "u"
};
/**aca controla la entrada de caracteres especiales permitiendo solo de la a a la z en minusculas sin acentos y numeros del 0 al 9 y " " */
const textarea = document.getElementById("input");
textarea.addEventListener("keydown", function(event) {
  const caracter = event.key;

  if (!/[a-z0-9 ]/.test(caracter)) {
    event.preventDefault();
    alert("caracter no valido, solo minuscula y sin acentos")
  }
});
/*la funcion encriptar recorre letra por letra para convertir secun patron en entorno global*/
function encriptar (){
    
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto;
  for (let patron in patrones) {
    textoEncriptado = textoEncriptado.replace(new RegExp(patron, "g"), patrones[patron]);
  }
/*aca se hace invicible la classe msg de salida que continene la imagen y el texto a posterior se cambia la propiedad hidden del boton copiar del htm para hacerlo vicible*/
  document.getElementById("msgsalida").style.visibility = "hidden";
  document.getElementById("botoncopiar").removeAttribute("hidden");
/*se carga el texto encriptado en la text area de salida */
  txtsalida.value = textoEncriptado;
/**se borra todo los valores de textarea de entrada */
  document.getElementById("input").value = '';

}
/**se recorre el la cadena de texto en busca de expreciones regulares y se las remlasa segun patrones2 */
function desencriptar() {
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado;
  for (let patron in patrones2) {
    const regex = new RegExp(patron, "g");
    texto = texto.replace(regex, patrones2[patron]);
  }
  /**igual que en encriptar se ocuta texto e imagen y se muestra boton copiar */
  document.getElementById("msgsalida").style.visibility = "hidden";
  document.getElementById("botoncopiar").removeAttribute("hidden");
  /**se almacena desencriptado en textarea salida y se borra textarea de ingreso */
  txtsalida.value = texto;
  document.getElementById("input").value = '';
}

/**se selecciona el contenido de textarea de salida, se copia al portapapeles y se muesta una alert de texto copiado */
function copiar () {
  txtsalida.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}
/**trigers o gatillos que llaman a las fnciones segun boton asignado */
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

botoncopiar.onclick = copiar;