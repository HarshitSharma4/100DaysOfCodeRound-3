var searchinput = document.getElementById('search');
var searchBtn = document.getElementById('submit');
var searchResult = document.getElementById('search-result');
var showMore = document.getElementById('show-more');


   
const clientId ='kRvbY8BpwdfkntSyJX5yIyfd7l43WfGhEH7xFXKjvpA';
var keyword ='';
var pageNo = 1;
const noOfItem = 12;
async function searchImage(){
    if(searchinput.value === ''){
        alert("enter input in search box");
        return;
    }
    if(pageNo === 1){
        searchResult.innerHTML ="";
    }
    let keyword = searchinput.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${keyword}&client_id=${clientId}&per_page=${noOfItem}`;

    const response = await fetch(url);
    const data = await response.json();
    let Results = data.results;
    Results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imagelink =document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
       

    })
    showMore.style.display='block';
}

searchBtn.addEventListener('click',(e)=>{
   e.preventDefault();
   pageNo = 1;
   searchImage();
})

showMore.addEventListener('click',()=>{
    pageNo++;
    searchImage();
})


//Dark Mode
var darkModeStatus = false;
const darkMode = document.querySelector('.darkmode');
const body = document.getElementById('main');
const form =document.getElementById('frm');
darkMode.addEventListener('click',()=>{
    if(!darkModeStatus){
        darkMode.innerHTML=`<i class="fa-solid fa-toggle-on"></i>`;
        body.style.backgroundColor  = 'rgb(43, 41, 41)';
        form.style.backgroundColor  = 'rgb(59, 57, 57)';
        darkModeStatus = true;
    }
    else{
        darkMode.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`;
        body.style.backgroundColor  = '#39297b';
        form.style.backgroundColor  = '#434989';
        darkModeStatus = false;
    }

})
