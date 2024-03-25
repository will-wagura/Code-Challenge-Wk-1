// Creates a form validation function //
function validateFormGrader() {
  let score1 = parseInt(document.getElementById("score1").value);
  let score2 = parseInt(document.getElementById("score2").value);
  let score3 = parseInt(document.getElementById("score3").value);
  let score4 = parseInt(document.getElementById("score4").value);
  // Checks if the input fields are empty //
  if (score1 === "" || score2 === "" || score3 === "" || score4 === "") {
    document.getElementById("error").innerText = "Input values required.";
    return false;
  }
  // Checks if the values are within range //
  if (
    score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100 || score3 < 0 || score3 > 100 || score4 < 0 || score4 > 100) {
    document.getElementById("error").innerText = "Values must be within 0 and 100.";
    return false;
  }
  // Clears any errors when all checks pass //
  document.getElementById("error").innerText = "";
  calculateGrade();
  return false;
}

// Creates a function to calculate the average score of the student and output the grade of the student//
// Calculation of the sum of the inputted values and finds the average //
function calculateGrade() {
  let score1 = parseInt(document.getElementById("score1").value);
  let score2 = parseInt(document.getElementById("score2").value);
  let score3 = parseInt(document.getElementById("score3").value);
  let score4 = parseInt(document.getElementById("score4").value);

  let average = Math.round((score1 + score2 + score3 + score4) / 4);
  // Assignment of grades depending on the values of the average //
  let grade;
  if (average >= 80) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else if (average >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  // Ouputs the values of the grades //
  document.getElementById("results").innerText =
    "Average Score: " + average.toFixed(2) + ", Grade: " + grade;
}
