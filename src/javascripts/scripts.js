 
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// Fix Nav Bar In Project when Scroll Page 
window.addEventListener("scroll", function () {  
  if (window.scrollY > 0) {  
    navbar.classList.add("navbar-fixed");  
  } else {  
    navbar.classList.remove("navbar-fixed");  
  }  
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();



