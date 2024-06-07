// fixed to top  nav and animations

const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
sections[0].classList.add("active");
sections[1].classList.add("active");
const backHead = document.querySelector(".back_head")
// Khai báo biến cờ


let isFirstScroll = true;
console.log(isFirstScroll);


document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    nav.classList.add("nav-fiexd-top");
    backHead.style.transform = "translateY(-50px)";
  } else if (window.scrollY <= 500) {
    backHead.style.transform = "translateY(50px)";
    nav.classList.remove("nav-fiexd-top");
    
  }

  sections.forEach(function (item) {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    }
  });
});


// nav bar
const navBar = document.querySelector(".nav__bar");
const navMenu = document.querySelector(".nav__menu");
let isNavList = true;
navBar.addEventListener("click", () => {
  if (isNavList == true) {
    nav.style.height = " 450px";
    isNavList = false;
    console.log("dung");
  } else {
    nav.style.height = " 50px";
    isNavList = true;
    console.log("sai");
  }
});

const listNavItem = document.querySelectorAll(".nav__item");
const listLinkNavItem = document.querySelectorAll(".nav__item a");
listLinkNavItem.forEach((navLinkItem) => {
  var cunrentURL = window.location.href;
  var hrefValue = navLinkItem.href;
  //console.log(cunrentURL);
  //console.log(hrefValue);
  if (cunrentURL === hrefValue) {
    var parent = navLinkItem.parentNode;
    parent.classList.add("nav__item--active");
  } else {
    var parent = navLinkItem.parentNode;
    parent.classList.remove("nav__item--active");
  }
});
