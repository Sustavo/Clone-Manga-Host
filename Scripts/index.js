let container = document.getElementsByClassName(".second-main-mangas");
let button = document.getElementsByClassName("manga")

button.addEventListener("click", function() {
  let container = document.getElementsByClassName("second-main-mangas");

  if(container.style.display === "none") {
    container.style.display = "block"
  } else {
    container.style.display = "none";
  }
})