/* global Swiper */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const backtoTop = document.querySelector('.back-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY >= 500) {
      backtoTop.style.opacity = '1';
    } else {
      backtoTop.style.opacity = '0';
    }
  });

  backtoTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  const body = document.body;
  const pageMenu = document.querySelector('.page__menu');
  const iconMenu = document.querySelector('.icon--menu');

  iconMenu.addEventListener('click', () => {
    body.classList.add('unscroll');
  });

  pageMenu.addEventListener('click', () => {
    body.classList.remove('unscroll');
  });

  /* eslint-disable-next-line no-unused-vars */
  const swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionTotal: addZero,
      formatFractionCurrent: addZero,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function addZero(num) {
    return '0' + num;
  }
});
