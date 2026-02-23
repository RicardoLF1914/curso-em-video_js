var vel = document.getElementById('velocidade')
var vel_med = 60
var r = document.getElementById('resultado')

function verificar() {
    var v = Number(vel.value)

    if (v > vel_med) {
        r.innerHTML = 'Você ultrapassou o limite de velocidade. Multado!'
        r.style.background = 'red'
    } else {
        r.innerHTML = 'Você está dentro do limite de velocidade'
        r.style.background = '#1c911c'
    }
    
    document.getElementById('dica').innerHTML = 'Dirija sempre com cinto de segurança'
}
