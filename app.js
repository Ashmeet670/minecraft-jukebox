bar = document.getElementById("progress-bar")
bar.style.width = "95%";

discs = {
    "5": document.getElementById("5"),
    "11": document.getElementById("11"),
    "13": document.getElementById("13"),
    "blocks": document.getElementById("blocks"),
    "cat": document.getElementById("cat"),
    "chirp": document.getElementById("chirp"),
    "creator_music_box": document.getElementById("creator_music_box"),
    "creator": document.getElementById("creator"),
    "mall": document.getElementById("mall"),
    "mellohi": document.getElementById("mellohi"),
    "otherside": document.getElementById("otherside"),
    "pigstep": document.getElementById("pigstep"),
    "precipice": document.getElementById("precipice"),
    "record": document.getElementById("record"),
    "relic": document.getElementById("relic"),
    "stall": document.getElementById("stall"),
    "strad": document.getElementById("strad"),
    "wait": document.getElementById("wait"),
    "ward": document.getElementById("ward"),
}

playing = "5"
isPlaying = false
barInterval = ""

function barLenght() {
    bar.style.width = `${((discs[playing].currentTime)/(discs[playing].duration))*100}%`
  

    window.requestAnimationFrame(barLenght);
  };

function play(song){

    discs[playing].pause()
    discs[playing].currentTime = 0
    discs[song].play()
    playing = song
    isPlaying = true

    window.requestAnimationFrame(progress_animation);

}



function togglePlayPause() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    
}
