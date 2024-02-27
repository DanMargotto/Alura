// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Boas vindas ao nosso programa');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let name = prompt('Coloque seu nome aqui');
console.log(`Olá, ${name}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let name = prompt('Coloque seu nome aqui');
alert(`Olá, ${name}`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let post = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`${post}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let value1 = parseInt(prompt('Coloque o valor da sua preferência'));
let value2 = parseInt(prompt('Coloque o valor da sua preferência'));

valueResult = value1 + value2;

console.log (`A soma de ${value1} e ${value2} é igual a ${valueResult}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let value1 = prompt('Coloque o valor da sua preferência');
let value2 = prompt('Coloque o valor da sua preferência');

valueResult = (value1 - value2);

console.log (`A diferença de ${value1} e ${value2} é igual a ${valueResult}`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let age = prompt('Digite sua idade aqui');

if (age > 18)
{
    console.log('É maior de idade');
}
else
{
    console.log('É menor de idade');
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let number = prompt ('Digite o valor');

if (number > 0)
{
    alert('É positivo');
}
else 
{
    if (number < 0)
    {
        alert('É negativo');
    }
    else
    {
        alert ('É zero')
    }
}

// Use um loop while para imprimir os números de 1 a 10 no console.

let number = 1;

while (number <= 10)
{
    console.log(number);
    number++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let testGrade = prompt('Coloque sua nota aqui');

if (testGrade >= 7)
{
    console.log ('Aprovado');
}
else
{
    console.log ('Reprovado');
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let randomNumber = Math.random();
console.log(randomNumber);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let randomNumber = parseInt(Math.random() * 10) + 1;
console.log(randomNumber);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let randomNumber = parseInt(Math.random() * 1000) + 1;
console.log(randomNumber);

