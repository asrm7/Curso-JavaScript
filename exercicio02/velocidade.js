const veiculo1 = prompt("Informe nome do primeiro veiculo:");
const x = prompt("informe a velocidade do primeiro veiculo:");
const veiculo2 = prompt("Informe nome do segundo veiculo:");
const y = prompt("informe a velocidade do segundo veiculo:");
const velocidade1 = parseFloat(x);
const velocidade2 = parseFloat(y);

if (velocidade1 === velocidade2) {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.");
} else if (veiculo1 > veiculo2) {
  alert(veiculo1 + " é mais rapido do que " + veiculo2);
} else if (veiculo2 > veiculo1) {
  alert(veiculo2 + " é mais rapido do que " + veiculo1);
}
