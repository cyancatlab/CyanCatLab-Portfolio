 
const navbar = document.querySelector('.nav');
const navBtn = document.querySelector("#nav_btn");
const closeBtn = document.querySelector("#close_btn");
const sidebar = document.querySelector("#sidebar");

// Fix Nav Bar In Project when Scroll Page 
window.addEventListener("scroll", function () {  
  if (window.scrollY > 0) {  
    navbar.classList.add("navbar_fixed");  
  } else {  
    navbar.classList.remove("navbar_fixed");  
  }  
});

// Show SideBar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show_sidebar");
});

// Close SideBar
navBtn.addEventListener("click", function () {
  sidebar.classList.remove("show_sidebar");
});



