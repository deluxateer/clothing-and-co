// const closeBtn = document.querySelector('.close-btn');
const menuIcon = document.querySelector('#menu-icon');
const mainPage = document.querySelector('#site-wrap');
const navBar = document.querySelector('#navBar');
const overLay = document.querySelector('.overlay');
let isOpen = false;

function openNav() {
  event.stopPropagation();
  navBar.style.width = "250px";
  // navBar.style.paddingTop = document.querySelector('#mobile-nav').offsetHeight + "px";
  mainPage.style.left = "250px";
  menuIcon.classList.toggle('change');
  // Activate Overlay
  overLay.style.display = "block";
  // overLay.style.opacity = "1";
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
  // overLay.style.opacity = "0";
  isOpen = false;
}

// closeBtn.addEventListener('click', closeNav);
menuIcon.addEventListener('click', () => {
  if (!isOpen) {openNav();}
  else         {closeNav();}
});
mainPage.addEventListener('click', () => {
  if (isOpen) {closeNav();}
});

// const bannerWidth = document.querySelector('.banner-left-side');
// const bannerContainer = document.querySelector('#alert-banner .container');
// bannerContainer.style.width = bannerWidth.style.width;
