let gridFilterItem = document.querySelectorAll('.grid__filter_item')
gridFilterItem.forEach(e => {
    e.addEventListener('click', function() {
        let gridFilterItemActive = document.querySelector('.grid__filter_item--active')
        gridFilterItemActive.classList.remove('grid__filter_item--active')
        e.classList.contains('grid__filter_item--active') !== true 
            ? e.classList.add('grid__filter_item--active')
            : null
    })
})