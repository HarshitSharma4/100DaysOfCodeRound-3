let eye=document.querySelector('.eye');
let password=document.querySelector('#password');


eye.addEventListener('click',()=>{
    console.log(password.type);
    if(password.type ==='password'){
       password.type='text';
       eye.innerHTML='<i class="fa-sharp fa-solid fa-eye"></i>';
    }
    else{
        password.type='password';
        eye.innerHTML='<i class="fa-regular fa-eye-slash"></i>';
    }
});