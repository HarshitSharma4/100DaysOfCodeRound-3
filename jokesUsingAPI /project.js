const url = `https://v2.jokeapi.dev/joke/Programming`;
const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

async function generateJoke(){
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    joke.innerHTML = "";
    if(result.type === "single"){
        let h = document.createElement('h2');
        h.innerHTML = result.joke;
        joke.appendChild(h);
    }
    else if(result.type === "twopart"){
        let h2 = document.createElement('h2'); 
        let h3 = document.createElement('h3');

        h2.innerHTML = result.setup;
        h3.innerHTML = result.delivery;
        joke.appendChild(h2);
        joke.appendChild(h3);
    }

}

btn.addEventListener('click',()=>{
    generateJoke();
})