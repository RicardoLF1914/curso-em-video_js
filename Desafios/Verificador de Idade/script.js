function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var r = document.getElementById('resultado')

    if(f_ano.value.length == 0 || f_ano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - f_ano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 12) {
                img.setAttribute('src', './assets/bebe-m.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', './assets/jovem-m.jpg')
            } else if(idade < 60) {
                img.setAttribute('src', './assets/adulto-m.jpg')
            } else {
                img.setAttribute('src', './assets/idoso-m.jpg')
            }

        } else {
            genero = 'Mulher'

            if(idade >= 0 && idade < 12) {
                img.setAttribute('src', './assets/bebe-f.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', './assets/jovem-f.jpg')
            } else if(idade < 60) {
                img.setAttribute('src', './assets/adulta-f.jpg')
            } else {
                img.setAttribute('src', './assets/idosa-f.jpg')
            }
        }

        r.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        r.appendChild(img)
    }
}