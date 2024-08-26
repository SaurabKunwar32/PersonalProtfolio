// scroll part start ****************************************
const toTop = document.querySelector(".to-top");
let head=document.querySelector(".head");

// we should add addEventListener in window ..if window scroll then our y width increses
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    // we should add class list that we have created in scroll.css
    toTop.classList.add("preview");
    head.classList.add("headAdd");
  } else {
    toTop.classList.remove("preview");
    head.classList.remove("headAdd");
  }
});



// scroll part end ****************************************


