// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let count = 1;

while (count <= 10) {
  console.log(`O número mostrado é ${count}`);
  count += 1;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let count = 10;

while (count >= 0) {
  console.log(`O número mostrado é ${count}`);
  count -= 1;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let count;

count = prompt("Digite seu número aqui");

while (count >= 0) {
  console.log(`O número mostrado é ${count}`);
  count -= 1;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let count = 0;
let maxNumber;

maxNumber = prompt("Digite seu número aqui");

while (count <= maxNumber) {
  console.log(`O número mostrado é ${count}`);
  count += 1;
}