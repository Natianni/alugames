function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let img = gameClicado.querySelector('.dashboard__item__img');
    let button = gameClicado.querySelector('.dashboard__item__button');
    // let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    verificaClasse(img, button);
}

function verificaClasse (img, button) {
    if (!img.classList.contains('dashboard__item__img--rented')) {
        img.classList.add('dashboard__item__img--rented');
    } else {
        img.classList.remove('dashboard__item__img--rented');
    }

    if (!button.classList.contains('dashboard__item__button--return')) {
        button.classList.add('dashboard__item__button--return');
    } else {
        button.classList.remove('dashboard__item__button--return');
    }
}

// forma mais dinamica abaixo

// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let img = gameClicado.querySelector('.dashboard__item__img');
//     let button = gameClicado.querySelector('.dashboard__item__button');

//     alternarClasse(img, 'dashboard__item__img--rented');
//     alternarClasse(button, 'dashboard__item__button--return');
// }

// function alternarClasse(elemento, classe) {
//     elemento.classList.toggle(classe);
// }



//quando o botão for clicado, remover a classe dashboard__item__img--rented, quando for clicado novamente, adicionar a mesma classe.