console.log('oi')

btnCompra1 = document.getElementById('btnCompra1')
btnCompra2 = document.getElementById('btnCompra2')
btnCompra3 = document.getElementById('btnCompra3')
btnCompra4 = document.getElementById('btnCompra4')

function carregaDocumento() {
    btnCompra1.style.display = 'none'
    btnCompra2.style.display = 'none'
    btnCompra3.style.display = 'none'
    btnCompra4.style.display = 'none'
}

function mouseHover1() {
    btnCompra1.style.display = 'block'
}

function mouseOut1() {
    btnCompra1.style.display = 'none'
}

function mouseHover2() {
    btnCompra2.style.display = 'block'
}

function mouseOut2() {
    btnCompra2.style.display = 'none'
}

function mouseHover3() {
    btnCompra3.style.display = 'block'
}

function mouseOut3() {
    btnCompra3.style.display = 'none'
}

function mouseHover4() {
    btnCompra4.style.display = 'block'
}

function mouseOut4() {
    btnCompra4.style.display = 'none'
}