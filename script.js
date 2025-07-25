let closeNavBar = document.querySelector(".close");
let navBar = document.querySelector(".nav__links");
let menuBar = document.querySelector(".menu-logo");
closeNavBar.addEventListener("click", () => {
    navBar.classList.add("hide");
});
menuBar.addEventListener("click",()=>{
    navBar.classList.remove("hide");
});
