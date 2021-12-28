let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// MENGHILANGKAN NAVBAR KETIKA LINK DI KLIK 
let navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    // active link
    navLink.onclick = () => {
        navLink.classList.add('active')
    }

    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // remove menu
    navbar.classList.remove('active')
    menu.classList.remove('fa-times')
}

navLink.forEach(n => n.addEventListener('click', linkAction));