function setAlarm() {
  const input = document.querySelector('#alarmSet')
  const tittle = document.querySelector('#timeRemaining')

  const secondsFormated = formatSeconds(input.value)
  tittle.textContent = `Time Remaining: ${secondsFormated}`
  setInterval(()=> {
    input.value = input.value -1
  },1000)
}

/*
  90  -> 01:30
  65  -> 01:05
  120 -> 02:00
  677 -> 11:17
*/
function formatSeconds(seconds){
   
  //const result = seconds / 60
  return `00:0${seconds}`
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
