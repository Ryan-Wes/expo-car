let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Função para atualizar o indicador de número
function updateIndicator() {
    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

// Função para atualizar a classe ativa e indicadores
function updateActiveItem(newActiveIndex) {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }
    
    // Adiciona a classe 'active' ao novo item
    items[newActiveIndex].classList.add('active');

    // Atualiza os pontos de indicador
    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }
    dots[newActiveIndex].classList.add('active');

    // Atualiza o número do indicador
    updateIndicator();
}

// Manipulador do botão 'next'
nextButton.onclick = () => {
    active = (active + 1) > lastPosition ? 0 : active + 1;
    updateActiveItem(active);
};

// Manipulador do botão 'prev'
prevButton.onclick = () => {
    active = (active - 1) < firstPosition ? lastPosition : active - 1;
    updateActiveItem(active);
};

// Inicializa o indicador
updateIndicator();