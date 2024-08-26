// *******************PRE LODER START**************************
// const preL = document.getElementById("preloder");

// let load=setTimeout(function(){
//   preL.style.display='none';
// },800);

// active part start***************************************
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
      let top =window.scrollY;
      let offset =sec.offsetTop - 150;
      let height =sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*='+ id +']').classList.add('active');
          });
      };
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
});

menu.addEventListener("click", () => {
  headerEle.classList.add("activeHead");
});

cross.addEventListener("click", () => {
  headerEle.classList.remove("activeHead");
});

// menu button end *************************************

