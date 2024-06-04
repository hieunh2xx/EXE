const textElement = document.querySelector(".text");
const breathingSound = document.getElementById("breathing-sound");
const audioControl = document.getElementById("audio-control");
const audioIcon = audioControl.querySelector("i");

audioControl.addEventListener("click", () => {
  if (breathingSound.paused) {
    breathingSound.play();
    audioIcon.classList.remove("fa-volume-up");
    audioIcon.classList.add("fa-volume-mute");
  } else {
    breathingSound.pause();
    audioIcon.classList.remove("fa-volume-mute");
    audioIcon.classList.add("fa-volume-up");
  }
});
