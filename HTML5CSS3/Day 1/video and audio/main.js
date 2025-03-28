var audio = document.querySelector("audio");
var volumeInp = document.getElementById("volumeInp");
var timeInp = document.getElementById("timeInp");
var speed = document.getElementById("speed");
var playBtn = document.getElementById("play-btn");
audio.addEventListener("loadedmetadata", loadDuration);
var audioNum = 1;
function nextAud() {
  audioNum = (audioNum % 3) + 1;
  loadAdu();
}
function prevAud() {
  audioNum = audioNum == 1 ? 3 : audioNum - 1;
  loadAdu();
}
function loadAdu() {
  audio.src = "media/audio" + audioNum + ".mp3";
  loadDuration();
  playAud();
  playBtn.innerText = "Pause";
}
function playAud() {
  if (audio.paused) {
    playBtn.innerText = "Pause";
    audio.play();
  } else {
    playBtn.innerText = "Play";
    audio.pause();
  }
}
function stopAud() {
  audio.load();
  audio.pause();
}
function muteAud() {
  audio.muted = !audio.muted;
}

function loadDuration() {
  timeInp.max = audio.duration;
  timeInp.value = 0;
}
volumeInp.addEventListener("input", function () {
  audio.volume = volumeInp.value;
});

timeInp.addEventListener("input", function () {
  audio.currentTime = timeInp.value;
});

audio.addEventListener("timeupdate", function () {
  timeInp.value = audio.currentTime;
});
audio.addEventListener("ended", function () {
  nextAud();
});

speed.addEventListener("change", function () {
  audio.playbackRate = speed.value;
});
