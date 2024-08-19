## *Anotacoes De Codigo:*
------------
#### Esse é o código original feito por mim com ajuda no ChatGPT:
```javascript

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
	
```
#### Esse foi o codigo mais dinamico feito com ajuda do ChaGPT:
```javascript

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
	
	
```

------------

#### Versao comentada do cotigo para futura analise:
```javascript

------------

#### Versao comentada do cotigo para futura analise:
    function alterarStatus(id) {
        // Obtém o elemento HTML do jogo com base no ID passado.
        let gameClicado = document.getElementById(`game-${id}`);
    
        // Seleciona a imagem dentro do elemento do jogo.
        let img = gameClicado.querySelector('.dashboard__item__img');
    
        // Seleciona o botão dentro do elemento do jogo.
        let button = gameClicado.querySelector('.dashboard__item__button');
    
        // Chama a função verificaClasse para atualizar as classes e o texto do botão com base no status atual.
        verificaClasse(img, button);
    }
    
    function verificaClasse(img, button) {
        // Verifica se a imagem não tem a classe que indica que o jogo foi alugado.
        if (!img.classList.contains('dashboard__item__img--rented')) {
            // Se não tiver, adiciona a classe indicando que o jogo foi alugado.
            img.classList.add('dashboard__item__img--rented');
            
            // Altera o texto do botão para "Devolver".
            button.textContent = 'Devolver';
        } else {
            // Se já tiver a classe, remove-a, indicando que o jogo não está alugado.
            img.classList.remove('dashboard__item__img--rented');
        }
    
        // Verifica se o botão não tem a classe que indica que é o botão de devolução.
        if (!button.classList.contains('dashboard__item__button--return')) {
            // Se não tiver, adiciona a classe indicando que o botão agora serve para devolver.
            button.classList.add('dashboard__item__button--return');
        } else {
            // Se já tiver a classe, remove-a, indicando que o botão volta a ser de aluguel.
            button.classList.remove('dashboard__item__button--return');
            
            // Altera o texto do botão para "Alugar".
            button.textContent = 'Alugar';
        }
    }
    
```