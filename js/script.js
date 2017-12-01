const closeBtn = document.querySelector('.close-btn');
const menuIcon = document.querySelector('#menu-icon');
const mainPage = document.querySelector('#site-wrap');
const navBar = document.querySelector('#navBar');
let isOpen = false;

function openNav() {
  event.stopPropagation();
  navBar.style.width = "250px";
  mainPage.style.left = "250px";
  isOpen = true;
}

function closeNav() {
  navBar.style.width = "0";
  mainPage.style.left = "0";
  isOpen = false;
}

closeBtn.addEventListener('click', closeNav);
menuIcon.addEventListener('click', openNav);
mainPage.addEventListener('click', () => {
  if (isOpen) {closeNav();}
});

// const bannerWidth = document.querySelector('.banner-left-side');
// const bannerContainer = document.querySelector('#alert-banner .container');
// bannerContainer.style.width = bannerWidth.style.width;
