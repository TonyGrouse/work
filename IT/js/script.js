"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu__icon'),
          menuBody = document.querySelector('.menu__body'),
          body = document.querySelector('body');

          
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('active');
        body.classList.toggle('lock');
    });

});