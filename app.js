/* Menu responsivo */
const btnMenu = document.querySelector("#btn-mobile");

function toggleMenu() {
    const nav = document.querySelector(".menu");
    nav.classList.toggle("active")
}

btnMenu.addEventListener("click", toggleMenu);

/* Efeito de Máquina de escrever */
const dev = document.querySelector('.dev');

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 500 * i)
    });
}

typeWrite(dev);

/* Projetos slides */
let count = 1;

setInterval(function(){
    nextCard()
}, 2000)

function nextCard() {
    count ++;
    if(count === 1) {
        return document.getElementById('one').checked = true;
    } else if(count === 2) {
        return document.getElementById('two').checked = true;
    } else if(count === 3) {
        return  document.getElementById('three').checked = true;
    } else if(count > 3) {
        count = 0
    }
}