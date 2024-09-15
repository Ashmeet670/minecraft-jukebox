bar = document.getElementById("progress-bar")
bar.style.width = "0%";

nowPlayingDiscName = document.getElementById("nowPlayingDiscName")
nowPlayingByName = document.getElementById("nowPlayingByName")

discs = {
        "Creator": document.getElementById("creator"),
    "Creator (Music Box)": document.getElementById("creator_music_box"),
    "Precipice": document.getElementById("precipice"),
    "Relic": document.getElementById("relic"),
    "5": document.getElementById("5"),
    "Otherside": document.getElementById("otherside"),
    "Pigstep": document.getElementById("pigstep"),
    "Cat": document.getElementById("cat"),
    "Chirp": document.getElementById("chirp"),
    "Blocks": document.getElementById("blocks"),
    "Mall": document.getElementById("mall"),
    "Mellohi": document.getElementById("mellohi"),
    "Far": document.getElementById("far"),
    "Stal": document.getElementById("stal"),
    "Strad": document.getElementById("strad"),
    "Wait": document.getElementById("wait"),
    "Ward": document.getElementById("ward"),
    "11": document.getElementById("11"),
    "13": document.getElementById("13"),
}

discsBy = {
    "5": "by Samuel Åberg",
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
    "Far": "by C418",
    "Relic": "by Aaron Cherof",
    "Stal": "by C418",
    "Strad": "by C418",
    "Wait": "by C418",
    "Ward": "by C418",
}

autoPlayOrder = ["Creator", "Creator (Music Box)", "Precipice", "Relic", "5", "Otherside", "Pigstep", "Cat", "Chirp", "Blocks", "Mall", "Mellohi", "Far", "Stal", "Strad", "Wait", "Ward", "11", "13"]

playing = "5"
isPlaying = false


playTextIsPlaying = document.getElementById("5Play")

function barLenght() {
    bar.style.width = `${((discs[playing].currentTime) / (discs[playing].duration)) * 100}%`

    if((((discs[playing].currentTime) / (discs[playing].duration)) * 100) == 100){
        nextTrackBar()
    }

    window.requestAnimationFrame(barLenght);
};

function play(song) {

    discs[playing].pause()
    discs[playing].currentTime = 0

    playTextIsPlaying.innerHTML = "Play"
    playTextIsPlaying.classList.remove("playing")

    document.getElementById("nowPlaying").classList.remove("d-none")


    playTextIsPlaying = document.getElementById(song + "Play")
    document.getElementById(song + "Play").innerHTML = "Playing..."
    playTextIsPlaying.classList.add("playing")


    bar.style.width = "0%"
    discs[song].play()
    nowPlayingDiscName.innerText = song
    nowPlayingByName.innerText = discsBy[song]

    playing = song
    isPlaying = true

    window.requestAnimationFrame(barLenght);

}

function playBar() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    discs[playing].play()
}

function pauseBar() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    discs[playing].pause()
}

function nextTrackBar() {
    toPlay = autoPlayOrder[(autoPlayOrder.indexOf(playing)) + 1]
    if ((autoPlayOrder.indexOf(playing)) == 18) {
        toPlay = "Creator"
    }
    play(toPlay)
}

function previousTrackBar() {
    toPlay = autoPlayOrder[(autoPlayOrder.indexOf(playing)) - 1]
    if ((autoPlayOrder.indexOf(playing)) == 0) {
        toPlay = "13"
    }
    play(toPlay)
}