// Fix Nav Bar In Project when Scroll Page  
const navbar = document.querySelector('.nav');

window.addEventListener("scroll", function () {  
  if (window.scrollY > 80) {  
    navbar.classList.add("navbar_fixed");  
  } else {  
    navbar.classList.remove("navbar_fixed");  
  }  
});