let openbtn=document.querySelector('.open-btn');
let model=document.querySelector('.model-cointainer');
let close=document.querySelector('.close-btn');


openbtn.addEventListener('click',()=>{
    model.style.display='block';
})

close.addEventListener('click',()=>{
    model.style.display='none';
})

window.addEventListener('click',(e)=>{
      if(e.target === model){
        model.style.display='none';
      }
})