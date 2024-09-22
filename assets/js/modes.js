
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
