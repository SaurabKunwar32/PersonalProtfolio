let modes = document.querySelector(".modes");


modes.addEventListener("click", () => {
  document.body.classList.toggle("lightMode");
  document.body.classList.toggle("textColor");
});

function toggleIcon() {
  let icon1 = document.getElementById("icon1");
  let icon2 = document.getElementById("icon2");
    if(icon1.style.display==="none"){
        icon1.style.display="block";
        icon2.style.display="none";
    }else{
        icon1.style.display="none";
        icon2.style.display="block";
    }
}


// we can use this toggling when we have the icons that we fetch from the font awsome
// let iconChange=document.getElementById("modeIcon");
// iconChange.addEventListener("click", function(){
//     this.classList.toggle("fa-sun");
//     this.classList.toggle("fa-moon");
// });
