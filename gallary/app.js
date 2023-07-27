let gallary = document.getElementById('gallary');
let selectImage = document.getElementById('selectedimage');
let imageIndex = [1,2,3,4,5,6,7,8];
let popUp = document.getElementById('popup');
let selectImageIndex = null;
let cencel = document.getElementById('cencel');


imageIndex.forEach(i=>{
      let image = document.createElement('img');
      image.src = `images/${i}.jpg`;
      image.alt=`sexy model image`;
      image.classList.add('imagestyle');
      image.addEventListener('click',()=>{
            selectImageIndex=i;
           
            selectImage.src=`images/${selectImageIndex}.jpg`;
            popUp.style.transform='translateY(0)';
           
      })
       gallary.append(image);

})

cencel.addEventListener('click',()=>{
    
      popUp.style.transform='translateY(-120%)';
      selectImageIndex=null;
      selectImage.src='';
})


