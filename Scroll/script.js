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


    // const btn = document.querySelector('.btn button');
    // btn.addEventListener('click', () => {
    //     alert('Hi');
    // });

    // function setClock(selector) {
    //     const timer = document.querySelector(selector),
    //           hoursSelector = timer.querySelector('#hours'),
    //           minutesSelector = timer.querySelector('#minutes'),
    //           secondsSelector = timer.querySelector('#seconds'),
    //           timeInterval = setInterval(updateClock, 1000);

    //     let hours = 1,
    //         minutes = 1,
    //         seconds = 15;

    //     updateClock();

    //     function getZeros(num) {
    //         return (num < 10) ? `0${num}` : num;
    //     } 

    //     function updateClock () {
    //         seconds--;
    //         localStorage.setItem('seconds', seconds);
    //         if (seconds < 0) {
    //             minutes--;
    //             seconds = 59;
    //             localStorage.setItem('seconds', seconds);
    //             localStorage.setItem('minutes', minutes);
    //         }
    //         if (minutes < 0) {
    //             hours--;
    //             minutes = 59;
    //             localStorage.setItem('minutes', minutes);
    //             localStorage.setItem('hours', hours);
    //         }
    //         if (hours < 0) {
    //             clearInterval(timeInterval);
    //             hours = '00';
    //             minutes = '00';
    //             seconds = '00';
    //             btn.disabled = true;
    //             btn.style.cssText = `
    //                 background-color: rgba(34, 34, 34, 0.7);
    //                 color: rgba(255, 255, 255, 0.7);
    //                 cursor: default;
    //             `;
    //         }
    //         localStorage.setItem('seconds', seconds);
    //         localStorage.setItem('minutes', minutes);
    //         localStorage.setItem('hours', hours);
    //         hoursSelector.textContent = getZeros(+localStorage.getItem('hours'));
    //         minutesSelector.textContent = getZeros(+localStorage.getItem('minutes'));
    //         secondsSelector.textContent = getZeros(+localStorage.getItem('seconds'));
    //     }
    // }
    // setClock('.timer');
});