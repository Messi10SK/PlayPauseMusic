console.log("Welcome to Spotify")
// Initialise the Variable s
let songIndex = 0;
let audioelement = new Audio('songs/5.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif =  document.getElementById('gif')
let masterSongName =  document.getElementById('masterSongName')

let songItems =Array.from(document.getElementsByClassName('songitem'))


   let songs =[
    {songName : "Satranga", filePath:"songs/1.mp3" ,coverPath: "covers/1.jpg" },
    {songName : "Choo Loo", filePath:"songs/2.mp3" ,coverPath: "covers/2.jpg" },
    {songName : "Muskurane", filePath:"songs/3.mp3" ,coverPath: "covers/3.jpg" },
    {songName : "Hawayein", filePath:"songs/4.mp3" ,coverPath: "covers/4.jpg" },
    {songName : "Hanuman ji", filePath:"songs/5.mp3" ,coverPath: "covers/5.jpg" },
    {songName : "Tu Chahiye", filePath:"songs/6.mp3" ,coverPath: "covers/6.jpg" },
    {songName : "Ranjha", filePath:"songs/7.mp3" ,coverPath: "covers/7.jpg" },
    {songName : "Hey David", filePath:"songs/8.mp3" ,coverPath: "covers/8.jpg" },
    {songName : "Qaafirana", filePath:"songs/9.mp3" ,coverPath: "covers/9.jpg" },
    {songName : "Vrindavan", filePath:"songs/10.mp3" ,coverPath: "covers/10.jpg" }
   ] 


songItems.forEach((element,i)=> {

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});


// HANDLE PLAY PAUSE CLICK 

masterPlay.addEventListener('click', ()=>{
if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity =1;
}

else{
    audioelement.pause();
    masterPlay.classList.remove('fa-pause-circle')
    masterPlay.classList.add('fa-play-circle')
    gif.style.opacity=0;
}
})






// LISTEN TO EVENTS 

audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    
     //UPDATE SEEKBAR 
  
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
     myProgressBar.value =progress;


})

// UPDATING BAR WITH CLICK ON IT 

myProgressBar.addEventListener('change',()=>{
   audioelement.currentTime =(myProgressBar.value * audioelement.duration/100)
 })


const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}


 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{

    makeAllPlays();
  
     songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    audioelement.src=`songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    })
 })


 document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioelement.src=`songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
 

 })

 document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioelement.src=`songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
 

 })