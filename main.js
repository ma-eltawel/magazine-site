let menuToggle = document.querySelector(".menu-toggle"), navMenu = document.querySelector(".nav-menu"), 
    menuClose = document.querySelector(".menu-close"), rightToggle = document.querySelector(".right-toggle"),
    RightMenu = document.querySelector("header .right"), rightClose = document.querySelector(".right-close"),
    backTop = document.querySelector(".back-top");

menuToggle.onclick = () => {
    navMenu.classList.add("show-menu");
} 
menuClose.onclick = () => {
    navMenu.classList.remove("show-menu");
}

rightToggle.onclick = () => {
    RightMenu.classList.add("show-right");
} 
rightClose.onclick = () => {
    RightMenu.classList.remove("show-right");
}
     
var swiper = new Swiper('.breaking-container', {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
    breakpoints: {
        640:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
});

const showElemOnScroll = function (){
    if(window.scrollY > 150){
        backTopbtn.classList.add("active");
    }
    else{
        backTopbtn.classList.remove("active")
    }
}

window.onscroll = () => {
    navMenu.classList.remove("show-menu");
    RightMenu.classList.remove("show-right");
    backTop.classList.toggle("active", window.scrollY > 150);
};