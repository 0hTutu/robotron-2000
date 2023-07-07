const controle = document.querySelectorAll('[data-controle]')
const pecas = require('./JSON/pecas.JSON');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(braco.value) - 1
    } else { 
        peca.value = parseInt(braco.value) + 1
    }
}; 