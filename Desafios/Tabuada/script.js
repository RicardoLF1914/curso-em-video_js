function tabuada() {
    let num = document.getElementById('txtn')
    let t = document.getElementById('seltab')

    t.innerHTML = ''

    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            t.appendChild(item)
        }
    }
}