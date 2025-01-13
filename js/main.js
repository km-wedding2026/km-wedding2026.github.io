
$('#mainNavbar .menu-item').on('click', function () {
  $('.navbar .collapse').collapse('hide');
});


window.addEventListener('scroll', function() {
  const element = document.getElementById('mainNavbar');
  const header = document.getElementById('header');
  const submenu = document.getElementById('navbarSubMenu');

  if (window.scrollY >= header.offsetHeight) {
      element.classList.remove('top');
      element.classList.add('scrolled');

      submenu.classList.remove('top');
      submenu.classList.add('scrolled');
  } else {
      element.classList.remove('scrolled');
      element.classList.add('top');

      submenu.classList.remove('scrolled');
      submenu.classList.add('top');
  }
});
window.addEventListener('resize', function() {
    const rose = document.getElementById('menuRose2');
    if (window.innerWidth < 565 ){
        rose.classList.add('hide-item');
    } else{
        rose.classList.remove('hide-item');
    }
});
window.addEventListener('load', function() {
  const element = document.getElementById('mainNavbar');
  const header = document.getElementById('header');
  const submenu = document.getElementById('navbarSubMenu');

  if (window.innerWidth < 565 ){
    const rose = document.getElementById('menuRose2');
    rose.classList.add('hide-item');
  }

  if (window.scrollY >= header.offsetHeight) {
      element.classList.remove('top');
      element.classList.add('scrolled');

      submenu.classList.remove('top');
      submenu.classList.add('scrolled');
  } else {
      element.classList.remove('scrolled');
      element.classList.add('top');

      submenu.classList.remove('scrolled');
      submenu.classList.add('top');
  }
});

// Countdown Timer Script
const weddingDate = new Date('May 29, 2026 15:00:00').getTime();
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if (distance < 0) {
      clearInterval(timer);
      document.getElementById('days').innerHTML = '00';
      document.getElementById('hours').innerHTML = '00';
      document.getElementById('minutes').innerHTML = '00';
      document.getElementById('seconds').innerHTML = '00';
  }
}, 1000);
