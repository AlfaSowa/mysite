let btnInfo = document.querySelector('.btn__info')
let info = document.querySelector('.info')
let menuItem = document.querySelectorAll('.menu__item')
let headerLine = document.querySelector('.header__line')
let header = document.querySelector('.header')
let layout = document.querySelector('.layout')

//показать/скрыть блок info
btnInfo.addEventListener('click', function() {
    info.classList.toggle('info--active')
})
window.addEventListener('click', function(e) {
    if(!e.target.matches('.btn__info, .btn__info *, .info, .info *')) {
        info.classList.remove('info--active')
    }
})
//окрашивать полосу в хедере при наведении на пункт меню
menuItem.forEach(e => {
    e.addEventListener('mouseenter', function() {
        headerLine.classList.add('header__line--active')
    })
    e.addEventListener('mouseleave', function() {
        headerLine.classList.remove('header__line--active')
    })
})
//показывать layout при наведении на хедер
header.addEventListener('mouseenter', function() {
    layout.classList.add('layout--active')
})
header.addEventListener('mouseleave', function() {
    layout.classList.remove('layout--active')
})