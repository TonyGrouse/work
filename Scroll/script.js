'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const navigationLink = document.querySelectorAll('.navigation__link a');

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
                behavior: 'auto',
            });
        });
    });
});
