// ====================== This is for the modes dark and light mode=========================
//   let modes = document.querySelector(".modes");

//   modes.addEventListener("click", () => {
//     document.body.classList.toggle("lightMode");
//     document.body.classList.toggle("textColor");
//     document.body.classList.toggle("serviceColor");
//     document.body.classList.toggle("cursorChange");
//   });

// function toggleIcon() {
//   let icon1 = document.getElementById("icon1");
//   let icon2 = document.getElementById("icon2");
//   if (icon1.style.display === "none") {
//     icon1.style.display = "block";
//     icon2.style.display = "none";
//   } else {
//     icon1.style.display = "none";
//     icon2.style.display = "block";
//   }
// }

// ==============================================OPTIONAL WAY==============================================
// we can use this toggling when we have the icons that we fetch from the font awsomeme to change the icon we we click on it ...
//<div class="modes"><i class="fa-regular fa-sun" id="modeIcon"></i></div>
// let iconChange=document.getElementById("modeIcon");
// iconChange.addEventListener("click", function(){
//     this.classList.toggle("fa-sun");
//     this.classList.toggle("fa-moon");
// });

document.addEventListener("DOMContentLoaded", () => {
  const modes = document.querySelector(".modes");
  let icon1 = document.getElementById("icon1");
  let icon2 = document.getElementById("icon2");

  function applyMode() {
    const mode = localStorage.getItem("mode");

    if (mode === "lightMode") {
      document.body.classList.add(
        "lightMode",
        "cursorChange",
        "serviceColor",
        "textColor"
      );
      icon1.style.display = "none"; // Moon icon hides
      icon2.style.display = "block"; // Sun icon shows
    } else {
      document.body.classList.remove(
        "lightMode",
        "cursorChange",
        "serviceColor",
        "textColor"
      );
      icon1.style.display = "block"; // Moon icon shows
      icon2.style.display = "none"; // Sun icon shows
    }
  }

  function toggleMode() {
    if (document.body.classList.contains("lightMode")) {
      localStorage.setItem("mode", "darkMode");
    } else {
      localStorage.setItem("mode", "lightMode");
    }
    // Re-apply the update based on the localStorage
    applyMode();
  }

  // Event listner for toggleMode
  modes.addEventListener("click", toggleMode);

  // Apply mode on page based on the localStorage
  applyMode();
});
