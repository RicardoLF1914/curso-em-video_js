var pais = document.getElementById('pais')
var nacionalidade = document.getElementById('nacionalidade')
var residencia = document.getElementById('residencia')

function verificar() {
    var b = document.querySelector('input[name="brasileiro"]:checked')?.value
    var p = pais.value

    if (b == 'sim') {
        nacionalidade.innerHTML = 'É brasileiro!'
        nacionalidade.style.background = 'yellow'
        nacionalidade.style.color = 'darkgreen'
    } else if (b == 'não') {
        nacionalidade.innerHTML = 'Não é brasileiro'
        nacionalidade.style.background = 'darkred'
        nacionalidade.style.color = 'white'
    } else {
        nacionalidade.innerHTML = 'Selecione uma opção!'
    }

    if (p != '') {
        residencia.innerHTML = 'Mora em: ' + p
        residencia.style.background = 'gray'
        residencia.style.color = 'black'
    } else {
        residencia.innerHTML = 'Informe o país!'
    }
}