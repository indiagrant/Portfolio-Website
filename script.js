const changingText = document.getElementById("changingText");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", () => {
  changingText.textContent = "Coding is my passion!";
});
