let deskToggle = document.querySelector('.desk__toggle');
let sidebarContent = document.querySelector('.sidebar__content');
let sidebarColapse = document.querySelector('.sidebar__colapse');
let myBoards = document.querySelector('.myboards');

function deskToggleActive() {
    sidebarContent.classList.toggle('sidebar__content--active');
    sidebarColapse.classList.toggle('sidebar__colapse--active');
    myBoards.classList.toggle('myboards--hide');
}
deskToggle.addEventListener('click', deskToggleActive, false);
