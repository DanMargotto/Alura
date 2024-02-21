// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dayOfTheWeek = prompt ('Qual é o dia de semana?');

if (dayOfTheWeek == 'Sábado' || dayOfTheWeek == 'Domingo')
{
    alert ('Bom fim de semana');
}
else
{
    alert ('Boa semana');
}


// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let digitedNumber = prompt('Digite qualquer valor: ');

if (digitedNumber > 0 )
{
    console.log('O número digitado é positivo');
}
else
{
    console.log('O número digitado é negativo');
}


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let punctuation = prompt ('Qual foi a sua pontuação?');

if (punctuation >= 100)
{
    alert ('Parabéns, você venceu!');
}
else
{
    alert ('Tente novamente para ganhar.');
}


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let accountBalance = 'R$ 300,00'
alert(`Saldo da sua conta: ${accountBalance}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let name = prompt('Coloque seu nome aqui');
alert('Boas vindas, ' + name);