var a = document.querySelector('div#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.style.background = 'gray'
    a.style.color = 'black'
    a.innerText = 'Clicou!'
}

function entrar() {
    a.style.background = 'lightgreen'
    a.style.color = 'black'
    a.innerText = 'Entrou!'
}

function sair() {
    a.style.background = 'darkolivegreen'
    a.style.color = 'white'
    a.innerText = 'Saiu!'
}