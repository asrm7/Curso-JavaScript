const e1 = prompt("Informe o primeiro valor:");
const e2 = prompt("Informe o segundo valor:");
const x = parseFloat(e1);
const y = parseFloat(e2);
const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados:\n" +
    "\nSoma:" +
    soma +
    "\nSubtracao:" +
    subtracao +
    "\nMultiplicacao:" +
    multiplicacao +
    "\nDivisao:" +
    divisao
);
