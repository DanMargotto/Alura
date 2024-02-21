// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dayOfTheWeek;

if (dayOfTheWeek == 'Saturday' || dayOfTheWeek == 'Sunday')
{
    alert ('Bom fim de semana');
}
else
{
    alert ('Boa semana');
}


// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let digitedNumber;

let digitedNumber = prompt('Digite qualquer valor: ');

if (digitedNumber > 0 )
{
    console.log('O número digitado é positivo');
}
else
{
    console.log('O número digitado é negativo');
}