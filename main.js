window.addEventListener('load', init);

var currentTime = 0;
var inputTime = 0;

// current time display update
function timeDisplay() {
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();

  if (currentHours < 10) {
    currentHours = '0' + currentHours;
  }

  if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes;
  }

  currentTime = document.getElementById('currenttime').innerHTML =
    currentHours + ':' + currentMinutes;
}

// get input time
function getInput() {
  inputTime = document.getElementById('timeselect').value;

  document.getElementById('test').innerHTML = inputTime;

  //reset alarm message when input gets changed to future time
  document.getElementById('alarm').innerHTML = '';
}

//display current time every second
//get input time every second
//compare input time and real time every second

function init() {
  setInterval(timeDisplay, 1000);

  setInterval(getInput, 1000);

  setInterval(timeCompare, 1000);
}

function timeCompare() {
  if (currentTime === inputTime) {
    document.getElementById('alarm').innerHTML = 'WAKE UP!';
  }
}
