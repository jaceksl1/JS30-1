function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop running function if key is not programmed
  audio.currentTime = 0; //change sound time to 0 and you can use key all the time with sound effect
  audio.play();
  key.classList.add("playing");
}

//we want to add function which will remove class"playing" when we stop clicking button
function removeTranstion(e) {
  if (e.propertyName !== "transform") return; //
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTranstion));
window.addEventListener("keydown", playSound);
