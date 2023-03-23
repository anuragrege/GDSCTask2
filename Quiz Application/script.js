function check() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  if (q1 == "New Delhi") {
    c++;
  }
  if (q2 == "Hundred") {
    c++;
  }
  if (q3 == "Asia") {
    c++;
  }
  if (q4 == "YES") {
    c++;
  }
  if (q5 == "Mobiles") {
    c++;
  }
  quiz.style.display = "none";

  if (c === 0) {
    result.textContent = "You should try harder. Your score is 0";
  } else if (c == 1) {
    result.textContent = "You can improve. Your score is 1";
  } else if (c == 2) {
    result.textContent = "You can be better. Your score is 2";
  } else if (c == 3) {
    result.textContent =
      "Sometimes, a decent score is all you need. Your score is 3";
  } else if (c == 4) {
    result.textContent = "Good! Your score is 4";
  } else if (c == 5) {
    result.textContent = "Excellent! Your score is 5";
  } else {
    result.textcontent = "Select options to view result";
  }
}
