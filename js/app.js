function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);// Obtém o elemento HTML do jogo com base no ID passado.
    let img = gameClicado.querySelector('.dashboard__item__img');// Seleciona a imagem dentro do elemento do jogo.
    let button = gameClicado.querySelector('.dashboard__item__button');// Seleciona o botão dentro do elemento do jogo.
    verificaClasse(img, button);// Chama a função verificaClasse para atualizar as classes e o texto do botão com base no status atual.
}

function verificaClasse (img, button) {
    // Verifica se a imagem não tem a classe que indica que o jogo foi alugado.
    if (!img.classList.contains('dashboard__item__img--rented')) {
        // Se não tiver, adiciona a classe indicando que o jogo foi alugado.
        img.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        // Altera o texto do botão para "Devolver".
        button.textContent = 'Devolver'
    } else {
        // Se já tiver a classe, remove-a, indicando que o jogo não está alugado.
        img.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar'
    }
}

//quando o botão for clicado, remover a classe dashboard__item__img--rented, quando for clicado novamente, adicionar a mesma classe.