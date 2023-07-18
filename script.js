//! NAV

//* NAV STICKY

const nav = document.querySelector("nav");
const forStickyNav = document.querySelector(".sticky-nav-content");
const initialCoord = forStickyNav.getClientRects();

window.addEventListener("scroll", function() {
  if (window.scrollY > initialCoord[0].top) {
    nav.classList.add("nav-sticky");
    nav.style.opacity = ".8";
  } else {
    nav.classList.remove("nav-sticky");
  }
});


//* NAV BEFORE COOKIE MESSAGE

const message = document.createElement("div");
message.classList.add("cookie-msg");

setTimeout(function() {
  message.innerHTML = 'Take advantage of 20% discount on purchases of €150 or more <button class="btn--close-cookie">X</button>';
}, 2000);

message.classList.add("cookie-msg");
nav.append(message);
nav.before(message);

message.style.textAlign = "center";

//* REMOVE COOKIE

document.addEventListener("click", function(event){
  if(event.target.classList.contains("btn--close-cookie")){
    message.remove();
  }
})

//NAV RESPONSIVE

// window.addEventListener('DOMContentLoaded', (event) => {
//   const navOpenBtn = document.querySelector('.nav-hamburger-btn');
//   const navCloseBtn = document.querySelector('.nav-close-btn');
//   const respNav = document.querySelector('.nav-content');

//   navOpenBtn.addEventListener('click', function() {
//     respNav.style.right = '0';
//   });

//   navCloseBtn.addEventListener('click', function() {
//     respNav.style.right = '-300px';
//   });
// });




//!CATEGORY

const categoryMain = [
  { name: "Daily", image: "img/daily-shoes.jpeg", link: "daily.html" },
  { name: "Running", image: "img/running_shoes.jpeg", link: "running.html" },
  { name: "Sneakers", image: "img/snk.webp", link: "sneakers.html" },
  { name: "Fitness", image: "img/fitness.jpeg", link: "fitness.html" },
  { name: "Football", image: "img/f_shoes.jpeg", link: "football.html" },
  { name: "Basketball", image: "img/b_shoes.jpeg", link: "basketball.html" },
];
function uploadCategory() {
  const categoryList = document.querySelector(".category-content");

  for (let i = 0; i < categoryMain.length; i++) {
    const categoryLink = document.createElement("a");
    categoryLink.href = categoryMain[i].link;
    categoryLink.style.textDecoration = "none"

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-box");
    categoryDiv.style.backgroundImage = `url(${categoryMain[i].image})`;

    const categoryName = document.createElement("h3");
    categoryName.textContent = categoryMain[i].name;
    categoryDiv.appendChild(categoryName);

    categoryLink.appendChild(categoryDiv);
    categoryList.appendChild(categoryLink);
  }
}

window.onload = uploadCategory;


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


//! PRODUCTS
