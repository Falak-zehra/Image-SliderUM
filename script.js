const  images = document.querySelectorAll(".im");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const box = document.querySelector(".box");
const slides = document.querySelector(".slide"); 

let arr = Array.from(images);

let count = 1;





right.addEventListener('click',()=>{
    if(count<arr.length){
        
    slides.style.transform = `translateX(-${count*800}px)`;
    count++
    }
    else if(count==arr.length){
        
        slides.style.transform = `translateX(-${0*800}px)`;
        count=1;
        
        }

})

left.addEventListener('click',()=>{
    if(count!=0 ){
        count--
    slides.style.transform = `translateX(-${count*800}px)`;
    
    }
    


})

















