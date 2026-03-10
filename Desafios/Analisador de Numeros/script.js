let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let r = document.getElementById('resultado')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        r.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        total = valores.length
        maior = Math.max(...valores)
        menor = Math.min(...valores)
        soma = valores.reduce((acc, val) => acc + val, 0)
        media = soma / total

        r.innerHTML = ''
        r.innerHTML += `<p>Ao todo temos ${total} números cadastrados<p>`
        r.innerHTML += `<p>O maior valor informado foi ${maior}<p>`
        r.innerHTML += `<p>O menor valor informado foi ${menor}<p>`
        r.innerHTML += `<p>Somando todos os valores, temos ${soma}<p>`
        r.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}<p>`
    }
}