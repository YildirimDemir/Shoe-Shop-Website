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