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
looping = false


function addCards() {

    // horizontal
    for (cardIndex = 2; cardIndex < autoPlayOrder.length; cardIndex++) {
        discName = "disc_" + (autoPlayOrder[cardIndex]).toLowerCase()
        document.getElementById("horizontalCards").insertAdjacentHTML('beforeend',
            `
            
            <!-- "${autoPlayOrder[cardIndex]}" -->
    
                    <div class="col-11 musicCard rounded-1 m-2">
    
                        <div class="d-flex  " >
    
                            <img class="musicCardImg my-auto mx-1" src="images/${discName}.png" alt="">
    
                            <div class="d-flex flex-column  mx-1">
    
                                <text class="musicCard-name mt-auto">${autoPlayOrder[cardIndex]}</text>
                                <text class="musicCard-by mb-auto">${(discsBy[autoPlayOrder[cardIndex]]).slice(3)}</text>
    
                            </div>
    
                            <div class="text-center justify-content-center justify-self-end  d-flex ms-auto my-2 mx-1">
                                <p name="${(autoPlayOrder[cardIndex])}Play" style="width: fit-content"
                                    class="fs-4 px-3 mx-0 my-auto rounded-1 musciCardPlay text-center"
                                    onclick="play('${autoPlayOrder[cardIndex]}')" >Play</p>
    
                            </div>
                        </div>
    
                    </div>
            
            
            `)
    }

    // vertical
    for (cardIndex = 2; cardIndex < autoPlayOrder.length; cardIndex++) {
        discName = "disc_" + (autoPlayOrder[cardIndex]).toLowerCase()
        document.getElementById("verticalCards").insertAdjacentHTML('beforeend',
            `
                <!-- ${autoPlayOrder[cardIndex]} -->
                <div class="col-5 col-md-4 col-lg-3 col-xl-2 musicCard rounded-1 pb-2 m-2">

                    <div class="d-flex flex-column justify-content-center">

                        <img class="musicCardImg my-auto mx-auto " src="images/${discName}.png " alt="">



                        <div class="d-flex flex-column justify-content-center align-items-center mb-2">

                            <text class="musicCard-name">${autoPlayOrder[cardIndex]}</text>
                            <text class="musicCard-by">${discsBy[autoPlayOrder[cardIndex]]}</text>

                        </div>

                        <div class="text-center justify-content-center  d-flex my-2">
                            <p name="${(autoPlayOrder[cardIndex])}Play" style="width: fit-content"
                                 class="fs-4 px-3 mx-0 my-auto rounded-1 musciCardPlay text-center"
                                onclick="play('${autoPlayOrder[cardIndex]}')" >Play</p>

                        </div>
                    </div>

                </div>
            `)
    }

}

addCards()

playTextIsPlaying = document.getElementsByName("5Play")


function barLenght() {
    bar.style.width = `${((discs[playing].currentTime) / (discs[playing].duration)) * 100}%`

    window.requestAnimationFrame(barLenght);
};


function play(song) {

    if (!isPlaying) {
        document.getElementById("play").classList.toggle("d-none")
        document.getElementById("pause").classList.toggle("d-none")
    }

    if (looping) {
        discs[playing].loop = false
    }

    discs[playing].pause()
    discs[playing].currentTime = 0
    bar.style.width = `${((discs[playing].currentTime) / (discs[playing].duration)) * 100}%`


    playTextIsPlaying.forEach(item => {

        item.innerHTML = "Play"
        item.classList.remove("playing")
        item.parentElement.parentElement.parentElement.classList.remove("playingParent")

    });



    document.getElementById("nowPlaying").classList.remove("d-none")



    playTextIsPlaying = document.getElementsByName(song + "Play")


    playTextIsPlaying.forEach(item => {

        item.innerHTML = "Playing..."
        item.classList.add("playing")

        item.parentElement.parentElement.parentElement.classList.add("playingParent")


    });





    bar.style.width = "0%"
    discs[song].play()


    nowPlayingDiscName.innerText = song
    nowPlayingByName.innerText = discsBy[song]



    playing = song
    isPlaying = true


    if (looping) {
        discs[playing].loop = true
    }

    window.requestAnimationFrame(barLenght);

}

function playBar() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    discs[playing].play()
    isPlaying = true
}

function pauseBar() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    discs[playing].pause()
    isPlaying = false
}

function nextTrackBar() {

    if (looping) {
        discs[playing].loop = false
    }

    toPlay = autoPlayOrder[(autoPlayOrder.indexOf(playing)) + 1]
    if ((autoPlayOrder.indexOf(playing)) == 18) {
        toPlay = "Creator"
    }
    play(toPlay)

    if (looping) {
        discs[playing].loop = true
    }
}

function previousTrackBar() {

    if (looping) {
        discs[playing].loop = false
    }


    toPlay = autoPlayOrder[(autoPlayOrder.indexOf(playing)) - 1]
    if ((autoPlayOrder.indexOf(playing)) == 0) {
        toPlay = "13"
    }
    play(toPlay)

    if (looping) {
        discs[playing].loop = true
    }
}

function forward10() {
    if (((discs[playing].currentTime) / (discs[playing].duration)) * 100 >= 90) {
        nextTrackBar()
    }
    else {
        discs[playing].pause()
        discs[playing].currentTime += 10
        discs[playing].play()
        bar.style.width = `${((discs[playing].currentTime) / (discs[playing].duration)) * 100}%`
    }


}

function backward10() {
    discs[playing].pause()
    discs[playing].currentTime -= 10
    discs[playing].play()
    bar.style.width = `${((discs[playing].currentTime) / (discs[playing].duration)) * 100}%`

    if (((discs[playing].currentTime) / (discs[playing].duration)) * 100 <= 0) {
        previousTrackBar()
    }
}

function loopSong() {
    if (looping) {
        document.getElementById("loopingOn").classList.add("d-none")
        document.getElementById("loopingOff").classList.remove("d-none")
        discs[playing].loop = false
        looping = false
    }
    else {
        document.getElementById("loopingOn").classList.remove("d-none")
        document.getElementById("loopingOff").classList.add("d-none")
        discs[playing].loop = true
        looping = true
    }
}

