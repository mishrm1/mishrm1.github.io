var qNum = 1; 
var score = 10;



function rightAnswer() {
  alert("correct!");
  qNum = qNum + 1;
  nextQuestion(); 
  score = score + 1;
}

function wrongAnswer() {
  alert("wrong, try again");
  score = score - 1;
}

function nextQuestion() {
  switch (qNum) {
    case 2:
      document.getElementById("Challenge_1").style.display = "none";
      document.getElementById("Challenge_2").style.display = "inherit";
      document.getElementById("resultone").style.display = "none";
      document.getElementById("resulttwo").style.display = "inherit";
      break;

    case 3:
      document.getElementById("Challenge_2").style.display = "none";
      document.getElementById("Challenge_3").style.display = "inherit";
      document.getElementById("resulttwo").style.display = "none";
      document.getElementById("resultthree").style.display = "inherit";
      break;

    case 4: 
      document.getElementById("Challenge_3").style.display = "none";
      document.getElementById("Challenge_4").style.display = "inherit";
      document.getElementById("resultthree").style.display = "none";
      document.getElementById("resultfour").style.display = "inherit";
      break;
  }
}