const palos = ["corazon", "diamante", "pica", "trebol"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
let iconoArriba = document.querySelector("#paloArriba");
let numero = document.querySelector("#numero");
let iconoAbajo = document.querySelector("#paloAbajo");

function selectCard(palos, valores) {
  let carta = [];
  carta.push(palos[Math.floor(Math.random() * palos.length)]);
  carta.push(valores[Math.floor(Math.random() * valores.length)]);
  return carta;
}
function asignColor(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    iconoArriba.style.color = "red";
    numero.style.color = "red";
    iconoAbajo.style.color = "red";
  } else {
    iconoArriba.style.color = "black";
    numero.style.color = "black";
    iconoAbajo.style.color = "black";
  }
}
function asignPalo(arr) {
  if (arr[0] === "corazon") {
    iconoArriba.innerHTML = "♥";
    iconoAbajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    iconoArriba.innerHTML = "♦";
    iconoAbajo.innerHTML = "♦";
  } else if (arr[0] === "picas") {
    iconoArriba.innerHTML = "♠";
    iconoAbajo.innerHTML = "♠";
  } else {
    iconoArriba.innerHTML = "♣";
    iconoAbajo.innerHTML = "♣";
  }
}
function asingValor(arr) {
  numero.innerHTML = arr[1];
}
function genCarta() {
  let carta = selectCard(palos, valores);
  asignColor(carta);
  asignPalo(carta);
  asingValor(carta);
}
const NewDiv = document.createElement('div');
NewDiv.classList.add('BT1');
const boton = document.createElement('button');
boton.classList.add('boton');
boton.type = 'button';
boton.innerText = 'Nueva Carta';
document.body.appendChild(NewDiv);
NewDiv.appendChild(boton);

document.querySelector(".BT1").addEventListener("click", genCarta);

window.onload = function() {
  genCarta();
};



