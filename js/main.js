// *******************PRE LODER START**************************
// const preL = document.getElementById("preloder");

// let load=setTimeout(function(){
//   preL.style.display='none';
// },800);

// active part start***************************************
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// active part end***************************************

// menu button start *************************************
let headerEle = document.querySelector(".head");
let menu = document.getElementById("menu-btn");
let cross = document.getElementById("cross-btn");
let linkBtn = document.getElementById("nav-lists");

// let tbutton=document.querySelector('.menu-bar-btn');
// let navA=document.getElementById("linkss");

// tbutton.addEventListener('click',()=>{
//   headerEle.classList.toggle('activeHead');
// })

linkBtn.addEventListener("click", () => {
  headerEle.classList.remove("activeHead");
  document.body.style.overflowY = "hidden";
});

menu.addEventListener("click", () => {
  headerEle.classList.add("activeHead");
});

cross.addEventListener("click", () => {
  headerEle.classList.remove("activeHead");
});

// menu button end *************************************

// ******************CV
let cv = document.getElementById("dCV");
cv.addEventListener("click", () => {
  alert("Sorry CV not available");
});

// ************************************
ScrollReveal({
  // reset: true,
  distance: "160px",
  duration: 2000,
  // delay: 300,
});

// ScrollReveal().reveal(".logo", { origin: "bottom" });
// ScrollReveal().reveal(".nav-lists li ", {
//   origin: "bottom",
//   delay: 100,
//   interval: 200,
// });

ScrollReveal().reveal(".this", { origin: "left"});
ScrollReveal().reveal(".Mname", { origin: "left",delay:100});
ScrollReveal().reveal(".para", { origin: "left",delay:200});
ScrollReveal().reveal(".social-list li", { origin: "left",interval:150});
ScrollReveal().reveal(".firstColumn", { origin: "bottom", delay:100});
ScrollReveal().reveal(".main-img", { origin: "right"});
ScrollReveal().reveal(".topic", { origin: "right"});
ScrollReveal().reveal(".ab1", { origin: "left"});
ScrollReveal().reveal(".About-text", { origin: "right"});
ScrollReveal().reveal(".sk_box", { origin: "left"});
ScrollReveal().reveal(".skills-grid .skill ", { origin: "left",interval:100});
ScrollReveal().reveal(".commonP", { origin: "left"});
ScrollReveal().reveal(".projectImages .imgOverlay", { origin: "bottom",interval:100, delay:100});
ScrollReveal().reveal(".secServices .service-card", { origin: "bottom",interval:100});
ScrollReveal().reveal(".contact1", { origin: "left",interval:100});
ScrollReveal().reveal(".contactMedia li", { origin: "left",interval:100});
ScrollReveal().reveal(".ContactF", { origin: "right",interval:100});

