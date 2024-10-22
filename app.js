
alert('Boas vindas ao jogo do mundo secreto');
let numeroSecreto = 2;
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao Numero Secreto
while ( chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
// Se o chute for igual ao número secreto
    if  (chute == numeroSecreto) { 
        alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativas.');
    } else {
        if (chute > numeroSecreto) {
        alert('O número secreto é menor que '+ chute);
        }
        else {
        alert('O número secreto é maior que ' + chute);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}