function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let img = gameClicado.querySelector('.dashboard__item__img');
    let button = gameClicado.querySelector('.dashboard__item__button');
    
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

function verificaClasse (img, button) {
    if (!img.classList.contains('dashboard__item__img--rented')) {
        img.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');

        button.textContent = 'Devolver';
    } else {
        img.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');

        button.textContent = 'Alugar';
    }
}

//quando o botão for clicado, remover a classe dashboard__item__img--rented, quando for clicado novamente, adicionar a mesma classe.