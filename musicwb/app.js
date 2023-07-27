let musiclist =[
    {
        music:`Imagine Dragons - Believer (Lyrics).mp3`,
        title:`Imagine Dragons - Believer`,
        artist:`Imagine Dragons`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Rv6IqnBSXQLNhtvnPM17y08lfoU9vBNw7A&usqp=CAU`
    },
    {
        music:`[YT2mp3.info] - EMIWAY - FEEL (OUTRO) (DHUNDKE DIKHA EP) (PROD BY RYINI BEATS) (320kbps).mp3`,
        title:` EMIWAY - FEEL`,
        artist:` EMIWAY `,
       img:`img/Untitled.jpeg`
    },
    {
        music:`Imagine Dragons - Bones (Lyrics).mp3`,
        title:`Bones `,
        artist:`Imagine Dragons`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Rv6IqnBSXQLNhtvnPM17y08lfoU9vBNw7A&usqp=CAU`
    },
    {
        music:`Justin Bieber - Baby ft. Ludacris.mp3`,
        title:`Baby `,
        artist:`Justin Bieber `,
        img:`https://i.ytimg.com/vi/kffacxfA7G4/maxresdefault.jpg`
    },
    {
        music:`Shape of You - Ed Sheeran (Lyrics) We Don't Talk Anymore (feat. Selena Gomez) - Charlie Puth,....mp3`,
        title:`Shape of You `,
        artist:` Ed Sheeran`,
        img:`img/Untitled1.jpeg`
    },
    {
        music:`Shawn Mendes, Camila Cabello - Señorita (Lyrics).mp3`,
        title:`Señorita `,
        artist:`Shawn Mendes, Camila Cabello`,
        img:`img/Untitled3.jpeg`
    },
    {
        music:`The Chainsmokers - Closer (Lyrics) Marshmello, Justin Bieber, Alan Walker..(Mix).mp3`,
        title:`Closer`,
        artist:`The Chainsmokers`,
        img:`img/Untitled3.jpeg`
    },
    {
        music:`Maroon 5 - Memories (Lyrics).mp3`,
        title:`Memories `,
        artist:`Maroon 5`,
        img:`img/Untitled5.jpeg`
    }
];

let aritistImage = document.getElementById('artist-image');
let SongName = document.getElementById(`Song-name`);
let artistName = document.getElementById('artist-name');
let progressDetail = document.getElementById('progress-detail');
let progressBar = document.getElementById('progress');
let currentTime =document.getElementById('current');
let finalTime = document.getElementById('final');
let playPause = document.getElementById('play-pause');
let loop = document.getElementById('loop');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let shuffle = document.getElementById('shuffle');
let mainSong = document.querySelector('.main-song');
let selectedIndex=0;
let playPauseStatus = true;

let loopStatus = true;

let shufflemusic = ()=>{
    let randomMusic = Math.floor(Math.random() * musiclist.length);
    console.log(randomMusic);
    loadtrack(randomMusic);
}


let music = new Audio();

function loadtrack(index){
    mainSong.src=`Music/`+musiclist[index].music;
    music.src = `Music/`+musiclist[index].music;
    artistName.innerText = musiclist[index].artist;
    SongName.innerText = musiclist[index].title;
    aritistImage.src = musiclist[index].img;
    playPause.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    playPauseStatus = true;
    music.play();
}


loadtrack(selectedIndex);

let nextsong = ()=>{
    if(loopStatus){
        selectedIndex++;
        if(selectedIndex > musiclist.length-1){
            selectedIndex =0;
        }
        loadtrack(selectedIndex);
    }
    else{
        shufflemusic();
    }
  

}

let previousSong = ()=>{
    if(loopStatus){
        selectedIndex--;
        if(selectedIndex < 0){
            selectedIndex = musiclist.length -1;
        }
        loadtrack(selectedIndex);
    }
    else{
        shufflemusic();
    }
   
}

next.addEventListener('click',()=>{
    nextsong();
});
previous.addEventListener('click',()=>{
    previousSong();
});

playPause.addEventListener('click',()=>{
    if(playPauseStatus){
        playPause.innerHTML =` <i class="fa-solid fa-play" id="play"></i>`;
        music.pause();
        playPauseStatus = false;
    }
    else{
        playPause.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        playPauseStatus = true;
        music.play();
    }
})

shuffle.addEventListener('click',()=>{
    loop.style.color = 'var(--fortColor)';
    shuffle.style.color = 'var(--thirdColor)';
    loopStatus=false;
})

loop.addEventListener('click',()=>{
    shuffle.style.color = 'var(--fortColor)';
    loop.style.color = 'var(--thirdColor)';
    loopStatus=true;
})




music.addEventListener('timeupdate',(e)=>{
    let musicCurrentTime = e.target.currentTime; //get music current time
    let musicTimeDuration = e.target.duration;   // total time duration
    let barWidth = (musicCurrentTime/musicTimeDuration)*100;
    progressBar.style.width = barWidth + `%`;


    progressDetail.addEventListener('click', (e)=>{
        let progressValue = progressDetail.clientWidth; //get width of progress bar
        let clientOffsetx = e.offsetX;
        
        music.currentTime = (clientOffsetx/progressValue) * musicTimeDuration;
    })
    music.addEventListener('loadeddata',(e)=>{
        let TimeDuration = e.target.duration;
         let minutes=Math.floor(TimeDuration/60);
         let second = Math.floor(TimeDuration%60);
         if(second <10){
            second = '0'+second;
         }
         finalTime.innerText= minutes +':'+second;
    })
    let minutes = Math.floor(musicCurrentTime/60);
    let second = Math.floor(musicCurrentTime%60);
    if(second <10){
            second = '0'+second;
    }
    currentTime.innerText= minutes +':'+second;
})



