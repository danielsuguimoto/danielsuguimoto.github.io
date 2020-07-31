(function () {
    const navbarBurguer = document.querySelector('.navbar__burguer'),
        navbar = document.querySelector('.navbar'),
        navbarLinks = document.querySelector('.navbar__links'),
        navbarAnchors = document.querySelectorAll('.navbar__links li a');

    window.addEventListener('scroll', function () {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTop > 150) {
            navbar.classList.add('small');
        } else {
            navbar.classList.remove('small');
        }
    });

    navbarBurguer.addEventListener('click', function () {
        navbarLinks.classList.toggle('navbar__links--active');
        this.classList.toggle('navbar__burguer--opened');
    });

    navbarAnchors.forEach(link => {
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

    const clearSkills = function () {
        const skillBars = document.querySelectorAll('.knowledge__bar__inner');

        skillBars.forEach(function (bar) {
            bar.classList.remove(bar.dataset.skill);
            bar.classList.add('empty');
        });
    };

    const fillSkills = function () {
        const skillBars = document.querySelectorAll('.knowledge__bar__inner');

        skillBars.forEach(function (bar) {
            bar.classList.remove('empty');
            bar.classList.add(bar.dataset.skill);
        });
    }

    scrollReveal.reveal('#home', { origin: 'left' });
    scrollReveal.reveal('#about', { origin: 'right' });
    scrollReveal.reveal('#curriculum', { origin: 'left', afterReveal: fillSkills, beforeReset: clearSkills });
    scrollReveal.reveal('#contact', { origin: 'right' });
})();