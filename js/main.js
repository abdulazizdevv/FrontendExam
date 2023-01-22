// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

// modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
    input = document.querySelectorAll(".input");
    input.forEach((el) => {
        el.classList.add("pl");
        el.value = "";
    });
};

const input = document.querySelectorAll(".input");
const loginBtn = document.querySelector(".login");
const input2 = document.querySelectorAll(".input2");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const passwordMain = document.querySelector(".passwordError");
const elPasswordStrength = document.querySelector(".error")

input.forEach((el) => {
    el.classList.add("pl");
    
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



togglePassword.addEventListener("mousedown", () => {
  password.type = "text";
});
togglePassword.addEventListener("mouseup", () => {
  password.type = "password";
});

password.addEventListener("input", (evt) => {
  evt.preventDefault()
  if (password.value.length > 0 && password.value.length <= 4) {
    elPasswordStrength.textContent = "Too short"
    elPasswordStrength.style.color = "red"
    passwordMain.style.border = "1px solid red"
  }
  if (password.value.length > 4 && password.value.length <= 7) {
    elPasswordStrength.textContent = "Normal"
    elPasswordStrength.style.color = "yellow"
    passwordMain.style.border = "1px solid #fcca03"
  }
  if (password.value.length > 7) {
    elPasswordStrength.textContent = "Good"
    elPasswordStrength.style.color = "lightgreen"
    passwordMain.style.border = "1px solid green"
  }
  if (password.value.length == 15) {
    elPasswordStrength.textContent = "Max"
    elPasswordStrength.style.color = "red"
    passwordMain.style.border = "1px solid red" 
  }
});
