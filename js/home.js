const indicators = document.querySelectorAll(".indicators a");

for (i of indicators) {
  function add(event) {
    const show = document.querySelector("#show img");
    show.setAttribute("src", this.firstElementChild.getAttribute("src"));
    event.preventDefault();
  }
  i.addEventListener("click", add);
}