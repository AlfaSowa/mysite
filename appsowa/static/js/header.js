let btnInfo = document.querySelector('.btn__info')
let info = document.querySelector('.info')
btnInfo.addEventListener('click', function() {
    info.classList.toggle('info--active')
})