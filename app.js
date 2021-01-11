const logo = document.querySelector('.nav__logo');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');


document.addEventListener('scroll', () => {
      if (scrollY > 500) {
            logo.setAttribute('src', '../assets/white-bg.svg');
            navLinks.forEach(el => el.style.color = 'black')
            nav.style.backgroundColor = 'rgba(255,255,255, .7)'
      } else {
            logo.setAttribute('src', '../assets/dark-bg.svg')
            navLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'transparent';
      }
})