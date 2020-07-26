(function () {
    const navbarBurguer = document.querySelector('.navbar__burguer'),
        navbar = document.querySelector('.navbar__links');

    navbarBurguer.addEventListener('click', function () {
        navbar.classList.toggle('navbar__links--active');
        this.classList.toggle('navbar__burguer--opened');
    });
})();