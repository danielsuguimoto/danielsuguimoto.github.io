(function () {
    const navbarBurguer = document.querySelector('.navbar__burguer'),
        navbar = document.querySelector('.navbar__links'),
        navbarLinks = document.querySelectorAll('.navbar__links li a');

    navbarBurguer.addEventListener('click', function () {
        navbar.classList.toggle('navbar__links--active');
        this.classList.toggle('navbar__burguer--opened');
    });

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            window.scroll({
                top: document.querySelector(this.hash).offsetTop,
                behavior: 'smooth'
            });
        });
    })

    const scrollReveal = ScrollReveal({
        reset: true,
        delay: 300,
        distance: '100%',
        rotate: {
            x: 300,
            z: 200
        },
        scale: 0.3,
    });

    scrollReveal.reveal('#home', { origin: 'left' });
    scrollReveal.reveal('#about', { origin: 'right' });
    scrollReveal.reveal('#work', { origin: 'left' });
    scrollReveal.reveal('#contact', { origin: 'right' });
})();