bar = document.getElementById("progress-bar")
bar.style.width = "0%";

nowPlayingDiscName = document.getElementById("nowPlayingDiscName")
nowPlayingByName = document.getElementById("nowPlayingByName")

discs = {
    "5": document.getElementById("5"),
    "11": document.getElementById("11"),
    "13": document.getElementById("13"),
    "Blocks": document.getElementById("blocks"),
    "Cat": document.getElementById("cat"),
    "Chirp": document.getElementById("chirp"),
    "Creator (Music Box)": document.getElementById("creator_music_box"),
    "Creator": document.getElementById("creator"),
    "Mall": document.getElementById("mall"),
    "Mellohi": document.getElementById("mellohi"),
    "Otherside": document.getElementById("otherside"),
    "Pigstep": document.getElementById("pigstep"),
    "Precipice": document.getElementById("precipice"),
    "Record": document.getElementById("record"),
    "Relic": document.getElementById("relic"),
    "Stall": document.getElementById("stall"),
    "Strad": document.getElementById("strad"),
    "Wait": document.getElementById("wait"),
    "Ward": document.getElementById("ward"),
}

discsBy = {
    "5" : "by Samuel Åberg",
    "11": "by C418",
    "13": "by C418",
    "Blocks": "by C418",
    "Cat": "by C418",
    "Chirp": "by C418",
    "Creator (Music Box)": "by Lena Raine",
    "Creator": "by Lena Raine",
    "Mall": "by C418",
    "Mellohi": "by C418",
    "Otherside": "by Lena Raine",
    "Pigstep": "by Lena Raine",
    "Precipice": "by Aaron Cherof",
    "Record": "by C418",
    "Relic": "by Aaron Cherof",
    "Stall": "by C418",
    "Strad": "by C418",
    "Wait": "by C418",
    "Ward": "by C418",
}

playing = "5"
isPlaying = false

function barLenght() {
    bar.style.width = `${((discs[playing].currentTime)/(discs[playing].duration))*100}%`
  

    window.requestAnimationFrame(barLenght);
  };

function play(song){

    discs[playing].pause()
    discs[playing].currentTime = 0
    bar.style.width = "0%"
    discs[song].play()
    nowPlayingDiscName.innerText = song
    nowPlayingByName.innerText = discsBy[song]

    playing = song
    isPlaying = true

   window.requestAnimationFrame(barLenght);

}


function playBar(){
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    discs[playing].play()
}

function pauseBar(){
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    discs[playing].pause()
}
