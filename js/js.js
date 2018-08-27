/*function loadmain() {
    document.getElementById("main").innerHTML='<div type="text/html" data="../works.html" ></div>';
}*/


$(document).ready(function(){
    $('.nav__about').click(function(){
        $('#main').load('../about.html');
    });
    $('.nav__works').click(function(){
        $('#main').load('../works.html');
    });
});