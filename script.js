console.log("Welcome to spotify");

// initialize the variable
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

                 
let songs = [
    {songName: "Lga Ja Gale ", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "Satrangi re", filePath: "songs/2.mp3", coverPath: "cover1.jpg"},
    {songName: "Jiya Jale", filePath: "songs/3.mp3", coverPath: "cover1.jpg"},
    {songName: "Dill se re", filePath: "songs/4.mp3", coverPath: "cover1.jpg"},
    {songName: "Aye Ajnabi", filePath: "songs/5.mp3", coverPath: "cover1.jpg"},
    {songName: "Ashiqui", filePath: "songs/6.mp3", coverPath: "cover1.jpg"},
    {songName: "Tere bin", filePath: "songs/7.mp3", coverPath: "cover1.jpg"},
    {songName: "Chhupana Bhi Nahin Aata", filePath: "songs/8.mp3", coverPath: "cover1.jpg"},
    {songName: "Ghar Se Niklte Hi", filePath: "songs/9.mp3", coverPath: "cover1.jpg"},
    {songName: "Dill Diwana", filePath: "songs/10.mp3", coverPath: "cover1.jpg"},
]
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName ;
})
// audioElement.play

// handle play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();  
        masterPlay.classList.remove('fa-play-circle'); 
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();  
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
    }      
)

// listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')   
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(( element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(( element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlays();  
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle'); 
        e.target.classList.add('fa-pause-circle'); 
        audioElement.src = `${songIndex}.mp3`; 
        // masterSongName.innerText = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle'); 
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    })  
})
 
// for move forward backard button
document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 9){   
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`; 
    masterSongName.innerText = [songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle'); 
    masterPlay.classList.add('fa-pause-circle'); 
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0){   
        songIndex = 0
    }
    else{ 
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`; 
    masterSongName.innerText = [songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle'); 
    masterPlay.classList.add('fa-pause-circle'); 
})
