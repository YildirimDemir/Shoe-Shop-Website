//! NAV

//* NAV STICKY

const nav = document.querySelector("nav");
const forStickyNav = document.querySelector(".category");
const initialCoord = forStickyNav.getClientRects();

window.addEventListener("scroll", function() {
  if (window.scrollY > initialCoord[0].top) {
    nav.classList.add("nav-sticky");
  } else {
    nav.classList.remove("nav-sticky");
  }
});

//* NAV BEFORE POPUP MESSAGE

const message = document.createElement("div");
message.classList.add("cookie-msg");

setTimeout(function() {
  message.innerHTML = 'Take advantage of 20% discount on purchases of €150 or more <button class="btn--close-cookie">X</button>';
}, 2000);

message.classList.add("cookie-msg");
nav.append(message);
nav.before(message);

message.style.textAlign = "center";


//!CATEGORY









//! NEWSLATTER
const modal = document.querySelector(".formModal");
const overlay = document.querySelector(".overlay");
const btnshowModal = document.querySelector(".showModal");
const btncloseModal = document.querySelector(".closeModal");
const inputEmail = document.querySelector(".modalMail");

const showModal = function () {
  modal.classList.remove("modalHidden");
  overlay.classList.remove("modalHidden");
  console.log("User joined Newsletter");
};

const closeModal = function () {
  modal.classList.add("modalHidden");
  overlay.classList.add("modalHidden");
};

const validateEmail = function () {
  const email = inputEmail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Enter your email");
  } else if (!emailRegex.test(email)) {
    alert("Enter a valid email address");
  } else {
    showModal();
  }
};

btnshowModal.addEventListener("click", validateEmail);
btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);