function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let r = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        r.innerHTML = 'Impossível contar'
    } else {
        r.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido, considerando passo 1')
            p = 1
        }

        if (i < f) {
            for (let c = i ; c <= f; c += p) {
                r.innerHTML += `${c} → ` 
            }
        } else {
            for (let c = i ; c >= f; c -= p) {
                r.innerHTML += `${c} → ` 
            }
        }

        r.innerHTML += `✅`
    }
}