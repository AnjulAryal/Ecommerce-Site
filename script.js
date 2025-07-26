let nav = document.querySelector("#navbar");
let menuButton = document.querySelector("#menu");
let closeButton = document.querySelector("#close");
let shoppingCart= document.querySelector("#shopping-cart");
let cartBox = document.querySelector("#cart-box");
let slides = document.querySelectorAll(".slide");
let addCartButton = document.querySelector(".add-cart")
let noofItems = document.querySelector(".no-of-items");
let unitPrice = document.querySelector(".unit-price");
let quantityStock = document.querySelector(".quantity-stock");
let totalPricehtml = document.querySelector(".total-price");
let checkOutButton = document.querySelector(".check-out");
let deleteButton = document.querySelector(".delete-icon");
let cardContainer = document.querySelector(".cart-container");
let emptyCard = document.querySelector(".empty-card");
console.log(cardContainer)
let counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})
const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
const goNext = ()=>{
    if(counter<3){
        counter++;
        slideImage()
    }else{
        counter = 0;
    }
}
const goPrev = ()=>{
      if(counter<=3){
        counter--;
        slideImage()
    }else{
        counter = 0;
    }
}
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
    let counting = 0;
    let minusButton = document.querySelector(".minus-button");
    let plusButton = document.querySelector(".plus-button");
    let productQuantity = document.querySelector(".product-quantity");
    plusButton.addEventListener("click",()=>{
        counting++;
        productQuantity.textContent = counting;
    })
    minusButton.addEventListener("click",()=>{
        if(counting>0){
            counting--;
            productQuantity.textContent = counting;
        }else{
            counting = 0;
        }
    })
    addCartButton.addEventListener("click",()=>{
        let unitPriceAmount = parseInt(unitPrice.textContent.replace('$',''));
        let quantityStocknumber = parseInt(productQuantity.textContent);
        let totalPrice = "$" + unitPriceAmount * quantityStocknumber;
        unitPrice.textContent = "$" + unitPriceAmount;
        quantityStock.textContent = quantityStocknumber;
        noofItems.textContent = productQuantity.textContent;
        totalPricehtml.textContent = totalPrice;
        noofItems.style.display= "flex"; 
        cardContainer.style.display = "grid";
        emptyCard.style.display = "none";
    })
deleteButton.addEventListener("click",()=>{
    cardContainer.style.display = "none";
    emptyCard.style.display = "block";
})
