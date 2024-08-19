let jogosAlugados = 0;
function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let img = gameClicado.querySelector('.dashboard__item__img');
    let button = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //confirmacao de devolucao
    if (img.classList.contains('dashboard__item__img--rented')) {
        let respostaDevolver = prompt('Você realmente deseja devolver esse jogo? (Digite 1 para SIM ou 0 para NÃO)');

        respostaDevolver = Number(respostaDevolver);
        if (respostaDevolver === 1) {
            verificaClasse(img, button);
        } else {
            alert('Devolução cancelada');
        }
    } else {
        // Se o jogo não estiver alugado, alterna para o estado de alugado
        verificaClasse(img, button);
    }
}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function verificaClasse (img, button,) {
    if (!img.classList.contains('dashboard__item__img--rented')) {
        img.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
        jogosAlugados++;
    } else {
        img.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
        jogosAlugados--;
    }

    contarEExibirJogosAlugados();
}

//quando o botão for clicado, remover a classe dashboard__item__img--rented, quando for clicado novamente, adicionar a mesma classe.