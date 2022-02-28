const rect1 = document.querySelector("#rect1")

rect1.addEventListener("click", function () {
  if (rect1.style.fill == "red") {
    rect1.style.fill = "blue";
  } else {
    rect1.style.fill = "red";
  }
});
