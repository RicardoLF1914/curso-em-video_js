function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if (hora >= 6 && hora < 12) {
        // BOM DIA
        img.src = 'assets/manhã.jpg'
        document.body.style.background = '#2273A2'
        document.body.style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'assets/tarde.jpg'
        document.body.style.background = '#F8A744'
        document.body.style.color = 'black'
    } else if (hora >= 18 && hora < 24) {
        // BOA NOITE
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#041010'
    } else {
        // BOA MADRUGADA
        img.src = 'assets/madrugada.jpg'
        document.body.style.background = '#7E756E'
        document.body.style.color = 'black'
    }
}