function verificar() {
    var hoje = new Date()
    var f_data = document.getElementById('txtdata')
    var r = document.getElementById('resultado')
    var nascimento = new Date(f_data.value)

    if (f_data.value.length == 0 || nascimento > hoje) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var idade = hoje.getFullYear() - nascimento.getFullYear()

        var aniversarioPassou = hoje.getMonth() > nascimento.getMonth() || (hoje.getMonth() == nascimento.getMonth() && hoje.getDate() >= nascimento.getDate())

        if (!aniversarioPassou) idade--

        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', './assets/bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/jovem-m.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', './assets/adulto-m.jpg')
            } else {
                img.setAttribute('src', './assets/idoso-m.jpg')
            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', './assets/bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/jovem-f.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', './assets/adulta-f.jpg')
            } else {
                img.setAttribute('src', './assets/idosa-f.jpg')
            }
        }

        r.innerHTML = `${genero} com ${idade} anos`
        r.appendChild(img)
    }
}