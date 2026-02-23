var age = document.getElementById('idade')
var r = document.getElementById('resultado')

function verificar() {
    var idade = Number(age.value)

    document.getElementsByTagName('p')[0].innerHTML = `Você tem ${idade} anos`

    if (idade < 16) {
        r.innerHTML = 'Não pode votar'
        r.style.background = 'red'
    } else if (idade < 18 || idade > 65) {
        r.innerHTML = 'Voto opcional'
        r.style.background = 'goldenrod'
    } else {
        r.innerHTML = 'Voto obrigatório'
        r.style.background = '#1c911c'
    }
}
