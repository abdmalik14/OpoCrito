var tblMenu = document.getElementsByClassName('tbl-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tblMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}
