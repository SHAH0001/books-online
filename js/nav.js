let nav = document.getElementById('nav');

let closeNav = document.getElementById('closeNav');

closeNav.onclick = function () {
    
    if (nav.classList.contains('nav-show')) {
        nav.classList.remove('nav-show');
    } else {
        nav.classList.add('nav-show');
    }

}