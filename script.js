let nav = document.querySelector("#navbar");
let menuButton = document.querySelector("#menu");
let closeButton = document.querySelector("#close");
let shoppingCart= document.querySelector("#shopping-cart");
let cartBox = document.querySelector("#cart-box");
menuButton.addEventListener("click",()=>{
    nav.classList.add("show");
    nav.classList.remove("hide");
});
closeButton.addEventListener("click",()=>{
    nav.classList.remove("show");
    nav.classList.add("hide");
});
shoppingCart.addEventListener("click",()=>{
    cartBox.classList.toggle("hide");
});