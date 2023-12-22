const atacante = prompt("Qual e o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("Qual e o poder de ataque?"));
const defensor = prompt("Qual e o nome do persogagem defensor?");
let pontoDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const poderDeDefesa = parseFloat(prompt("Qual e o poder de defesa?"));
const possuiEscudo = prompt("Ele possui um escudo? Sim/Nao");

let danoCausado = 0;
if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Nao") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}
pontoDeVida -= danoCausado;
alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
