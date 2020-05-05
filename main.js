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

  //reset alarm message when input gets changed to future time and stop alarm sound and remove clockimg
  document.getElementById('alarm').innerHTML = '';
  document.getElementById('clockimg1').style.display = 'none';

  document.getElementById('audiotag1').pause();
  document.getElementById('audiotag1').currentTime = 0;
}

//display current time every second
//get input time every second
//compare input time and current time every second

function init() {
  setInterval(timeDisplay, 1000);

  setInterval(getInput, 1000);

  setInterval(timeCompare, 1000);
}

function timeCompare() {
  if (currentTime === inputTime) {
    document.getElementById('alarm').innerHTML = 'WAKE UP!';

    document.getElementById('clockimg1').style.display = 'block';

    document.getElementById('audiotag1').play();
  }
}

// Timer JS

document.getElementById('startbtn').addEventListener('click', timerOuter);

var intervalVar;
var inputMin;
var inputSec;

function timerOuter() {
  inputMin = document.getElementById('minuteinput').value;
  inputSec = document.getElementById('secondinput').value;

  document.getElementById('startbtn').removeEventListener('click', timerOuter);
  document.getElementById('stopbtn').addEventListener('click', stopFunction);

  intervalVar = setInterval(timerFunction, 1000);

  function timerFunction() {
    if (inputSec > 0) {
      inputSec--;
      document.getElementById('secondinput').value = inputSec;
    } else if (inputMin > 0 && inputSec === 0) {
      inputMin--;
      document.getElementById('minuteinput').value = inputMin;

      document.getElementById('secondinput').value = 59;
      inputSec = document.getElementById('secondinput').value;
    } else {
      document.getElementById('inputalarm').innerHTML = 'Times Up!';
      document.getElementById('secondinput').value = 0;
      document.getElementById('minuteinput').value = 0;
      clearInterval(intervalVar);
      document.getElementById('startbtn').addEventListener('click', timerOuter);
      document.getElementById('clockimg2').style.display = 'block';
      document.getElementById('audiotag2').play();
    }
  }

  function stopFunction() {
    clearInterval(intervalVar);
    document.getElementById('startbtn').addEventListener('click', timerOuter);
    document.getElementById('clockimg2').style.display = 'none';
    document.getElementById('inputalarm').innerHTML = '';
    document.getElementById('audiotag2').pause();
    document.getElementById('audiotag2').currentTime = 0;
  }
}
