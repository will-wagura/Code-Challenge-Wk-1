//Creteas a function to calculate the average score of the student and output the grade of the student//
// Calculation of the sum of the inputted values and finds the average //
function calculateGrade() {
  let score1 = parseInt(document.getElementById("score1").value);
  let score2 = parseInt(document.getElementById("score2").value);
  let score3 = parseInt(document.getElementById("score3").value);
  let score4 = parseInt(document.getElementById("score4").value);

  let totalScore = score1 + score2 + score3 + score4;
  let average = totalScore / 4;
// Assignment of grades depending on the values of the average //
  let grade;
  if (average >= 80) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else if (average >= 40) [(grade = "D")];
  else {
    grade = "E";
  }
// Ouputs the values of the grades //
  document.getElementById("results").innerText =
    "Average Score: " + average.toFixed(2) + ", Grade: " + grade;
}