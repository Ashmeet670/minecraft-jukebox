bar = document.getElementById("progress-bar")
bar.style.width = "95%";



function togglePlayPause() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    
}

playing = false
nowPlaying = ''
toPlay = ''
var audio


// function playSong(url){
//     toPlay = url
//     if(playing){
//         audio.pause()
//         console.log("paused")
//     }
//     else{
//         console.log("playing")
//         audio = new Audio(url).play()
//         playing = true
//     }
// }

// function playNow(){
//     if(playing){
//         console.log("playingNew")
//         if(nowPlaying === toPlay){
//             //do nothing
//         }
//         else if(nowPlaying != toPlay){

//             console.log("pauseingn playing")

//             audio.pause()
//             audio.currentTime = 0
//             playing = true
//         }
//     }
//     else{
//         console.log("playingNew1")
//         audio = new Audio(toPlay).play()
//         playing = true

//     }
// }
