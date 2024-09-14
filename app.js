bar = document.getElementById("progress-bar")
bar.style.width = "95%";

function togglePlayPause() {
    document.getElementById("play").classList.toggle("d-none")
    document.getElementById("pause").classList.toggle("d-none")
    
}


function play(){
    document.getElementById("creator").play()
}