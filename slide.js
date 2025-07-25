let slides = document.querySelectorAll(".slide");
let counter = 0 ;
slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})
const goNext = ()=>{
    if(counter<=3){
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
const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
