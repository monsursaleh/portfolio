const header = document.querySelector(".main-nav");
const hamburger = document.querySelector("#mobileButton");
const linksUl = document.querySelector("#links");
const menulinks = document.querySelectorAll(".menulink");
const menuItems = document.querySelectorAll("nav ul li a");
const toTopButton = document.querySelector("#toTopButton");
let scrollPos; // storing scroll postion
let scrollPosAlt;

// 1.fucntions work: if you scroll then from less then 200 then it will
//back button will appear and header class bg classList willl add change header apperence
// backButton display to none beforeHand

window.onscroll = () => {
  scrollFunction();
};

let scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopButton.style.visibility = "visible";
    header.classList.add("bg");
  } else {
    toTopButton.style.visibility = "hidden";
    header.classList.remove("bg");
  }
};

// 2 it will show  the items form hamburger manue in mobile - it
const showMob = () => {
  // getting the position when mobilemenu is opened
  scrollPos = document.documentElement.scrollTop;
  scrollPosAlt = document.body.scrollTop;
  // toggling the menu visible/hidden;
  linksUl.classList.toggle("hideMenu");
};

// lopingn every every menue link for any click  it will toggle ul links
hamburger.addEventListener("click", showMob);

for (const link of menulinks) {
  link.addEventListener("click", showMob);
}

// 3.Function if you click this It will reach you top of the page

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; //
};

toTopButton.addEventListener("click", getToTop);
