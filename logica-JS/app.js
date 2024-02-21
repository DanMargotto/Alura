let errorMessage = 'Boas vindas ao jogo do número secreto';
alert(errorMessage);

let secretNumber = 5;
console.log(secretNumber);

// Adicione um console.log para verificar o valor de "chute" (kick) após a entrada do usuário
let kick = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:' + kick);

// Adicione um console.log para verificar a comparação entre "chute"(kick) e "numeroSecreto"(secretNumber)
console.log('Resultado da comparação:', kick == secretNumber);

if (kick == secretNumber) 
{
    alert('Isso aí! Você descobriu o número secreto: ' + secretNumber + '!');
    // pode fazer da seguinte forma de cima ou de baixo, da sua preferência
    // alert(`Isso aí! Você descobriu o número secreto: ${secretNumber}`);
}
else
{
    // Adicione um console.log para verificar o valor de "numeroSecreto"(secretNumber) quando o jogador erra
    console.log('Valor do número secreto:', secretNumber);
    alert('Errou! Tente novamente! O número secreto era ' + secretNumber + '!');
}


// É importante lembrar que, quando o projeto ficar disponível para todas as pessoas, o que chamamos no contexto de software de ambiente de produção, os comandos console.log devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.