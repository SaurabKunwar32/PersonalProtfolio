// Disabling  specific keyboard shortcuts
document.addEventListener("keydown", (event) => {
  if (
    // Check for F12 (common shortcut to open developer tools)
    event.key === "F12" ||
    // Check for Ctrl + Shift + C ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "C" || event.key === "c")) ||
    // Check for Option + Command + C (For mac)
    (event.metaKey &&
      event.altKey &&
      (event.key === "C" || event.key === "c")) ||
    // Check for Ctrl + Shift + J ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "J" || event.key === "j")) ||
    // Check for Option + Command + J (For mac)
    (event.metaKey &&
      event.altKey &&
      (event.key === "J" || event.key === "j")) ||
    // Check for Option + Command + I (For mac)
    (event.metaKey &&
      event.altKey &&
      (event.key === "I" || event.key === "i")) ||
    // Check for Ctrl + Shift + I ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "I" || event.key === "i")) ||
    // Check for Ctrl + Shift + K ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "K" || event.key === "k")) ||
    // Check for Option + Command + K (For mac)
    (event.metaKey && event.altKey && (event.key === "K" || event.key === "k"))
  ) {
    event.preventDefault();
  }
});

// ********************************** active  link part start*************************************

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

//**************************************** active link  part end ***************************************

// menu button start *************************************
let headerEle = document.querySelector(".head");
let menu = document.getElementById("menu-btn");
let cross = document.getElementById("cross-btn");
let linkBtn = document.getElementById("nav-lists");

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

// ======================================Another way ============================================
// let tbutton=document.querySelector('.menu-bar-btn');
// let navA=document.getElementById("linkss");

// tbutton.addEventListener('click',()=>{
//   headerEle.classList.toggle('activeHead');
// })

// ======================================== ============================================

// menu button end *************************************

// ******************CV***************************
let cv = document.getElementById("dCV");
cv.addEventListener("click", () => {
  alert("Sorry CV not available");
});

// ************************************For animations sections*******************************************

ScrollReveal({
  distance: "160px",
  duration: 2000,
});

ScrollReveal().reveal(".firstColumn", {
  origin: "left",
  delay: 200,
  interval: 200,
});
ScrollReveal().reveal(".social-list li", {
  origin: "bottom",
  interval: 100,
  delay: 300,
});
ScrollReveal().reveal(".main-img", { origin: "right" });
ScrollReveal().reveal(".topic", { origin: "right" });
ScrollReveal().reveal(".ab1", { origin: "right" });
ScrollReveal().reveal(".About-text", { origin: "left" });
ScrollReveal().reveal(".sk_box", { origin: "left" });
ScrollReveal().reveal(".skills-grid .skill ", {
  origin: "left",
  interval: 100,
});
ScrollReveal().reveal(".commonP", { origin: "left" });
ScrollReveal().reveal(".projectImages .imgOverlay", {
  origin: "bottom",
  interval: 100,
  delay: 100,
});
ScrollReveal().reveal(".secServices .sevBOX", { origin: "top", interval: 100 });
ScrollReveal().reveal(".contact1", { origin: "left", interval: 100 });
ScrollReveal().reveal(".contactMedia li", { origin: "right", interval: 100 });
ScrollReveal().reveal(".ContactF", { origin: "left", interval: 100 });
