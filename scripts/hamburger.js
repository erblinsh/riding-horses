const hamburger = document.getElementById('hamburger');
let navRight = document.getElementById('nav-mask');
let navLinks = document.getElementsByClassName('nav-links')[0];
const navbarSearchInput = document.querySelector('.nav-search input');


hamburger.addEventListener('click', (e) => {
    e.stopPropagation();

    navRight.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.classList.toggle('active');
})


navbarSearchInput.addEventListener('click', (e) => {
    e.stopPropagation();
});


document.body.addEventListener('click', () => {
    if(navRight.classList.contains("active")) {
        navRight.classList.remove("active");
        navLinks.classList.remove("active");
        hamburger.classList.remove('active');
    }
})