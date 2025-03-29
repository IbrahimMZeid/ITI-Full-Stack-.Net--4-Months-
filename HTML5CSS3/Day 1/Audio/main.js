var audio = document.querySelector("audio");
var volumeInp = document.getElementById("volumeInp");
var timeInp = document.getElementById("timeInp");
var speed = document.getElementById("speed");
var playBtn = document.getElementById("play-btn");
var play_img = playBtn.children[0];
var mute_img = document.getElementById("mute-img");

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
  play_img.src = "icons/pause.png";
}
function playAud() {
  if (audio.paused) {
    play_img.src = "icons/pause.png";
    audio.play();
  } else {
    play_img.src = "icons/play.png";
    audio.pause();
  }
}
function stopAud() {
  play_img.src = "icons/play.png";
  audio.load();
  audio.pause();
}
function muteAud() {
  if (audio.muted) mute_img.src = "icons/unmute.png";
  else mute_img.src = "icons/mute.png";
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
