let search = document.querySelector('input');
let searchbtn = document.querySelector('.search');
let mealName = document.querySelector('.meal-name');
let mealType = document.querySelector('.meal-type');
let mealArea = document.querySelector('.meal-area');
let ingredientList = document.querySelector('.ingredient-list');
let picture= document.querySelector('img');
let instruction = document.querySelector('#instruction');


async function getrecips (name){
    let responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    let data = await responce.json();
    console.log(data);
    let result = data.meals[0];
    console.log(result);
    mealName.innerHTML=result.strMeal;
    mealType,innerHTML=result.strCategory;
    mealArea.innerHTML = result.strArea;
    ingredientList.innerHTML = "";
     let li1 = document.createElement('li');
     li1.innerHTML = result.strIngredient1;
     ingredientList.appendChild(li1);


     let li2 = document.createElement('li');
     li2.innerHTML = result.strIngredient2;
    ingredientList.appendChild(li2);

    let li3 = document.createElement('li');
    li3.innerHTML = result.strIngredient3;
    ingredientList.appendChild(li3);

    let li4 = document.createElement('li');
    li4.innerHTML = result.strIngredient4;
    ingredientList.appendChild(li4);

    let li5 = document.createElement('li');
    li5.innerHTML = result.strIngredient5;
    ingredientList.appendChild(li5);

    let li6 = document.createElement('li');
    li6.innerHTML = result.strIngredient6;
    ingredientList.appendChild(li6);


    picture.src = result.strMealThumb;
    instruction.innerHTML = result.strInstructions;

}


searchbtn.addEventListener('click',()=>{
    if(search.value !== ''){
        getrecips(search.value);
    }

})