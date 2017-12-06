
const menuIcon = document.querySelector('#menu-icon');
const mainPage = document.querySelector('#site-wrap');
const navBar = document.querySelector('#navBar');
const overLay = document.querySelector('.overlay');
let isOpen = false;

function openNav() {
    event.stopPropagation();
    navBar.style.width = "250px";
    mainPage.style.left = "250px";
    menuIcon.classList.toggle('change');

    // Activate Overlay
    overLay.style.display = "block";
    overLay.style.backgroundColor = "rgba(0,0,0,.45)"
    overLay.style.left = navBar.style.width;
    isOpen = true;
}

function closeNav() {
    navBar.style.width = "0";
    mainPage.style.left = "0";
    menuIcon.classList.toggle('change');

    // Deactivate Overlay
    overLay.style.display = "none";
    overLay.style.backgroundColor = "transparent";
    isOpen = false;

  if (window.innerWidth >= 992) {navBar.style.width = "100%";}
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 992) {
    document.querySelector('#mobile-nav').appendChild(navBar);
  }
});
menuIcon.addEventListener('click', () => {
  if (!isOpen) { openNav(); }
  else         { closeNav(); }
});
mainPage.addEventListener('click', () => {
  if (isOpen) { closeNav(); }
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    closeNav();
  } else if (window.innerWidth <= 991 && !isOpen) {
    navBar.style.width = "0";
    menuIcon.classList.remove('change');
  }
  document.querySelector('#mobile-nav').appendChild(navBar);
});
