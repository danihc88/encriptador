const textoIngresado = document.getElementById("input");
const textoResultado = document.getElementById("txtSalida");

const btnEncriptar = document.getElementById("botonEncriptar");
const btnDesencriptar = document.getElementById("botonDesencriptar");
const btnCopiar = document.getElementById("botoncopiar");

const patrones = {
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "a": "ai",
  "u": "ufat"
};

const patrones2 = {
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ai": "a",
  "ufat": "u"
};

function encriptar (){
    
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto;
  for (let patron in patrones) {
    textoEncriptado = textoEncriptado.replace(new RegExp(patron, "g"), patrones[patron]);
  }

  document.getElementById("msgsalida").style.visibility = "hidden";
  document.getElementById("botoncopiar").removeAttribute("hidden");

  txtsalida.value = textoEncriptado;

  document.getElementById("input").value = '';

}

function desencriptar() {
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado;
  for (let patron in patrones2) {
    const regex = new RegExp(patron, "g");
    texto = texto.replace(regex, patrones2[patron]);
  }
  document.getElementById("msgsalida").style.visibility = "hidden";
  document.getElementById("botoncopiar").removeAttribute("hidden");
  txtsalida.value = texto;
}


function copiar () {
  txtsalida.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

botoncopiar.onclick = copiar;