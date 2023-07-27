let slider=document.querySelectorAll('.slider');
let btns=document.querySelectorAll('.btn');

let currentSlide=0;

//java scrpt manual navigation

let manualNav=(manual)=>{
   slider.forEach((s)=>{
    s.classList.remove('active');
   });
   btns.forEach((btn)=>{
    btn.classList.remove('active');
   })
   slider[manual].classList.add('active');
   btns[manual].classList.add('active');
   currentSlide=manual;
}

btns.forEach((btn,i) => {
    btn.addEventListener('click',()=>{
        manualNav(i);
    })
    
});


//automatic image scoler

let automatic=()=>{
    currentSlide++;
   
    if(currentSlide<slider.length){
        slider.forEach((s)=>{
            s.classList.remove('active');
           });
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
        slider[currentSlide].classList.add('active');
        btns[currentSlide].classList.add('active');
    }
    
    if(currentSlide>=slider.length-1){
        currentSlide=-1;
    }
   
}
let repeat=setInterval(automatic,4000);