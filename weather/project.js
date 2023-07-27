const apikey = "11112d61dad6beb077f4c80f5b7b4156";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const apiEnd = "&appid=";
var input = document.getElementById('city');
var groundImage = document.getElementById('background-weather');
var weatherImage = document.getElementById('weather-image');
async function checkWeather(city){
    const response = await fetch(apiUrl+city+apiEnd+apikey);
    var data = await response.json();
    
    if(response.status == 404){
        //dailog open
    }

    document.getElementById('temprature').innerHTML = Math.round(data.main.temp  -273.15);
    document.getElementById('location').innerHTML = data.name;
    document.getElementById('cloud').innerHTML = data.clouds.all;
    document.getElementById('humadity').innerHTML =  data.main.humidity+'%';
    document.getElementById('wind').innerHTML = data.wind.speed+'km/h';
    //document.getElementById('rain').innerHTML = data.rain.lh;
     console.log(data.weather[0].main);
     weatherImage.src = `images/${data.weather[0].main}.png`;
     groundImage.style.backgroundImage = `linear-gradient(rgba(101, 120, 224, 0.1), rgba(96, 94, 116, 0.6)),url("backgroundImage/${data.weather[0].main}.jpg")`
    var today = new Date();
    console.log(today);
    const f = new Intl.DateTimeFormat("en-us",{
        dateStyle:"short",
        timeStyle:"short"
    })
    console.log(f.format(today));
    document.getElementById('time-date').innerHTML = f.format(today);

}

checkWeather("Udaipur");
var loadApi=(city)=>{
    if(city === "")
        return;
        let removeselect = document.querySelectorAll('.select');
        removeselect.forEach((select)=>{
            select.classList.remove('select');
        });
    checkWeather(input.value);
}
document.getElementById('search').addEventListener('click',()=>{
   console.log(input.value);
   loadApi(input.value);
})


var jaipurApi = ()=>{
    let removeselect = document.querySelectorAll('.select');
    removeselect.forEach((select)=>{
        select.classList.remove('select');
    });
    jaipur.classList.add('select');
    checkWeather('Jaipur');

} 
var bangaloreApi = ()=>{
    let removeselect = document.querySelectorAll('.select');
    removeselect.forEach((select)=>{
        select.classList.remove('select');
    });
    console.log(bangalore);
    bangalore.classList.add('select');
    checkWeather('Bangalore');
} 

var mumbaiApi = ()=>{
    let removeselect = document.querySelectorAll('.select');
    removeselect.forEach((select)=>{
        select.classList.remove('select');
    });
    mumbai.classList.add('select');
    checkWeather('Mumbai');
} 

var goaApi = ()=>{
    let removeselect = document.querySelectorAll('.select');
    removeselect.forEach((select)=>{
        select.classList.remove('select');
    });
    goa.classList.add('select');
    checkWeather('Goa');
} 

var jaipur =document.querySelector('.jaipur')
jaipur.addEventListener('click',()=>{
    jaipurApi();

})
var bangalore=document.querySelector('.bangalore')
bangalore.addEventListener('click',()=>{
    bangaloreApi();
})

var mumbai=document.querySelector('.mumbai')
mumbai.addEventListener('click',()=>{
    mumbaiApi();
})

var goa=document.querySelector('.goa')
goa.addEventListener('click',()=>{
    goaApi();
})


window.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if(input.value === "") return;
    loadApi(input.value);
    // console.log(e);
    // console.log(input.value);

  });