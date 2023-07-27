let btn=document.querySelectorAll(".btn");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',(event) =>{
           alert("enter is pressed"+event.target);     
    })
}


