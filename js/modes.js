// ====================== This is for the modes dark and light mode=========================
  let modes = document.querySelector(".modes");

  modes.addEventListener("click", () => {
    document.body.classList.toggle("lightMode");
    document.body.classList.toggle("textColor");
    document.body.classList.toggle("serviceColor");
    document.body.classList.toggle("cursorChange");
  });

function toggleIcon() {
  let icon1 = document.getElementById("icon1");
  let icon2 = document.getElementById("icon2");
  if (icon1.style.display === "none") {
    icon1.style.display = "block";
    icon2.style.display = "none";
  } else {
    icon1.style.display = "none";
    icon2.style.display = "block";
  }
}

// ==============================================OPTIONAL WAY==============================================
// we can use this toggling when we have the icons that we fetch from the font awsomeme to change the icon we we click on it ...
//<div class="modes"><i class="fa-regular fa-sun" id="modeIcon"></i></div>
// let iconChange=document.getElementById("modeIcon");
// iconChange.addEventListener("click", function(){
//     this.classList.toggle("fa-sun");
//     this.classList.toggle("fa-moon");
// });
