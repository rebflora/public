'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')


    var className = document.body.className;
    
    if(className == "light-theme") {
        this.textContent = "Dark";
        
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
    localStorage.setItem('theme', className);
}); 

const currentTheme = localStorage.getItem("theme") || "light-theme";

if (currentTheme == "light-theme dark-theme") {
  document.body.classList.toggle("dark-theme");

  switcher.innerText = currentTheme === 'light-theme' ? 'Dark' : 'Light';
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;

const navbarScroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {navbar.classList.remove('sticky')
    }
};
window.onscroll = navbarScroll;

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }