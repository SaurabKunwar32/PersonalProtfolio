//************************************* */ scroll part start ****************************************

const toTop = document.querySelector(".to-top");

// we should add addEventListener in window ..if window scroll then our vertical  scroll position
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    // we should add class list that we have created in scroll.css
    toTop.classList.add("preview");
  } else {
    toTop.classList.remove("preview");
  }
});


// ***************************************scroll part end ****************************************




// ==================================for blur start=================================================
const blurHeader = () => {
  let head = document.querySelector(".head");

  this.scrollY >= 50
    ? head.classList.add("blurHeader")
    : head.classList.remove("blurHeader");
};

window.addEventListener("scroll",blurHeader);
// ==================================for blur end=================================================
