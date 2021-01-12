/* ***************** */
/* Navigation colors */
/* on scroll ******* */

const logo = document.querySelector('.nav__logo');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');




document.addEventListener('scroll', () => {
      if (scrollY > 500 && screen.width > 376) {
            logo.setAttribute('src', '../assets/white-bg.svg');
            navLinks.forEach(el => el.style.color = 'black')
            nav.style.backgroundColor = 'rgba(255,255,255, .7)'
      } else {
            logo.setAttribute('src', '../assets/dark-bg.svg')
            navLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'transparent';
      }

})



/* ******************** */
/* Paragraph Animations */
/* ******************** */

const pAnimation = document.querySelector('.p__animation');
const h2Animation = document.querySelector('.h2__animation');


document.addEventListener('scroll', () => {

      if (scrollY > 700 && scrollY < 1800) {
            h2Animation.classList.add('animate__heading');
            pAnimation.classList.add('animate__paragraph')
      } else {
            h2Animation.classList.remove('animate__heading')
            pAnimation.classList.remove('animate__paragraph')
      }
})


const pAnimation1 = document.querySelector('.p__animation1');
const buttonAnimation = document.querySelector('.button__animation');

document.addEventListener('scroll', () => {

      if (scrollY > 2200) {
            pAnimation1.classList.add('animate__paragraph1');
            buttonAnimation.classList.add('animate__button');
      } else {

            pAnimation1.classList.remove('animate__paragraph1');
            buttonAnimation.classList.remove('animate__button');
      }
})

/* ****************** */
/* * Hill animation * */
/* ****************** */

const hill1 = document.querySelector('#mountain1')
const hill2 = document.querySelector('#mountain2')
const hill3 = document.querySelector('#mountain3')

document.addEventListener('scroll', () => {
      if (scrollY > 2200) {
            hill1.classList.add('hill1__animation')
            hill2.classList.add('hill2__animation')
            hill3.classList.add('hill3__animation')
      } else {
            hill1.classList.remove('hill1__animation')
            hill2.classList.remove('hill2__animation')
            hill3.classList.remove('hill3__animation')
      }
})




/* * B U R G E R  * */
/* ****************** */


const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__links');
const burger = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', () => {
      if (menu.classList.contains('active1')) {
            menu.classList.remove('active1')


      } else {
            menu.classList.add('active1');
            nav.style.backgroundColor = 'var(--pri-den-gray-100)';
      }
})


let menuOpen = false;

menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
            burger.classList.add('open');
            menuOpen = true;

      } else {
            burger.classList.remove('open');
            menuOpen = false;
      }
});