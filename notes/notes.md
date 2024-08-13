## *Anotacoes De Codigo:*
------------
#### Esse é o código original feito por mim com ajuda no ChatGPT:

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
            button.textContent = 'Devolver'
        } else {
            img.classList.remove('dashboard__item__img--rented');
        }
    
        if (!button.classList.contains('dashboard__item__button--return')) {
            button.classList.add('dashboard__item__button--return');
        } else {
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar'
        }
    }
	
#### Esse foi o codigo mais dinamico feito com ajuda do ChaGPT:

    function alterarStatus(id) {
        let gameClicado = document.getElementById(`game-${id}`);
        let img = gameClicado.querySelector('.dashboard__item__img');
        let button = gameClicado.querySelector('.dashboard__item__button');
    
        alternarClasse(img, 'dashboard__item__img--rented');
        alternarClasse(button, 'dashboard__item__button--return');
    }
    
    function alternarClasse(elemento, classe) {
        elemento.classList.toggle(classe);
    }