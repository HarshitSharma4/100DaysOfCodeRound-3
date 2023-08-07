// const show = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry);
//         if(entry.isIntersecting){
//            entry.target.classList.add('show');
           
//         }
        
//     })
// });
// const trshow = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry);
//         if(entry.isIntersecting){
//            entry.target.classList.add('trshow');
//         }
        
//     })
// });




// navigation.classList.add(show);

// show.observe(profilePhoto);
// trshow.observe(about);
// container.forEach((el)=>{
//     trshow.observe(el);
// })

const navigation= document.querySelector('.navigation');
const profilePhoto =document.querySelector('.profilephoto'); 
const container = document.querySelectorAll('.container');
const about = document.querySelector('.about');



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function LaodingAnimation() {
    await sleep(200);
    navigation.classList.add('trshow');
    await sleep(2000);
    profilePhoto.classList.add('show');
    await sleep(1000);
    about.classList.add('trshow');
    await sleep(1000);
    container.forEach((el)=>{
           el.classList.add('trshow');
    })

  }
  
  LaodingAnimation();
  

var right = document.querySelector(".about")
var cir1 = document.querySelector(".circle1")
var cir2 = document.querySelector(".circle2")

right.addEventListener("mouseenter",(e) =>{
    cir1.classList.add("active1")
    cir2.classList.add("active2")

    

})

right.addEventListener("mouseleave",(e) =>{
    cir1.classList.remove("active1")
    cir2.classList.remove("active2")

    

})


const manue = document.querySelector('.manue');
const cross = document.querySelector('.cross');
const navOption = document.querySelector('.nav-option');

manue.addEventListener('click',()=>{
    manue.style.display = 'none';
    cross.style.display = 'block';
})