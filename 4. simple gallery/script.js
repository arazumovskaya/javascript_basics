var nextPageSrc = "";
var prevPageSrc = "";

var intervalId = 0;
var paused = false;

var countdown = 10;
var countdownId = 0;

function setPages(prevPage, nextPage) {
  nextPageSrc = nextPage;
  prevPageSrc = prevPage;
  if (prevPage != "") {
    intervalId = window.setInterval(function(){
      window.open(nextPageSrc);
      window.close();
    }, (countdown) * 1000);
    countdownId = window.setInterval(function(){
      countdown--;
      document.getElementById("count").textContent = countdown;
    }, 1000);
    document.getElementById("count").textContent = countdown;
  } else {
    nextPageSrc = "page1.html";
  }
}

function pause() {
  if (!paused) {
    window.clearInterval(intervalId);
    window.clearInterval(countdownId);
    document.getElementById("pause").value = "Пуск";
    paused = true;
  } else {
    document.getElementById("pause").value = "Пауза";
    intervalId = window.setInterval(function(){
      window.open(nextPageSrc);
      window.close();
    }, (countdown) * 1000);
    countdownId = window.setInterval(function(){
      countdown--;
      document.getElementById("count").textContent = countdown;
    }, 1000);
    paused = false;
  }
}

function prev() {
  window.open(prevPageSrc);
  window.close();
}

function again() {
  window.open(nextPageSrc);
  window.close();
}

function stop() {
  window.close();
}
