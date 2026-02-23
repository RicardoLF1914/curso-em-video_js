var nome = prompt('Qual é o seu nome?')
var salário = parseFloat(prompt('Qual é o seu salário?'))
document.write(`Olá, <strong>${nome}</strong>! Seu saláro é ${salário.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)