let welcomeMessage = 'Boas vindas ao jogo do número secreto';
alert(welcomeMessage);

let secretNumber = 30;


let kick;
let attempt = 1;  // Esse comando mostra a quantidade de tentativas

// enquanto chute(kick) não for igual ao número secreto(secretNumber)
while (kick != secretNumber)
{
    kick = prompt('Escolha um número entre 1 e 100');
    // se chute(kick) for igual ao número secreto(secretNumber)
    if (kick == secretNumber) 
    {
        alert('Isso aí! Você descobriu o número secreto: ' + secretNumber + '. Foram ' + attempt + ' tentativas!!');
    // pode fazer da seguinte forma de cima ou de baixo, da sua preferência
    // alert(`Isso aí! Você descobriu o número secreto: ${secretNumber}`);
    }
    else
    {
        if (kick > secretNumber)
        {
        alert (`O número secreto é menor que ${kick}`);
        }
        else
        {
        alert(`O número secreto é maior que ${kick}`);
        }
        attempt += 1;
    }
}


// É importante lembrar que, quando o projeto ficar disponível para todas as pessoas, o que chamamos no contexto de software de ambiente de produção, os comandos console.log devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.