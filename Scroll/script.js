window.addEventListener('DOMContentLoaded', () => {
    const navigationLink = document.querySelectorAll('.navigation__link a'),
          section = document.querySelectorAll('.section'),
          wrapper = document.querySelector('.wrapper');

    navigationLink.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const href = link.getAttribute('href').slice(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = 0;
            const elementPos = scrollTarget.getBoundingClientRect().top;
            const offsetPos = elementPos - topOffset;

            window.scrollBy({
                top: offsetPos,
                behavior: 'smooth',
            });
        });
    });
});
