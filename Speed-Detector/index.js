// Creates a form validation function //
function validateFormDetector() {
  let speed = parseInt(document.getElementById("speed").value);
  // Checks if the input field is empty //
  if (speed === "") {
    document.getElementById("error").innerText = "Input values required";
    return false;
  }
  // Checks if the field values are valid //
  if (isNaN(speed) || speed <= 0) {
    document.getElementById("error").innerText = "Enter valid value";
    return false;
  }
  // Clears any errors and calls the demerit points function to execute //
  document.getElementById("error").innerText = "";
  calculateDemeritPoints();
  return false;
}
// Creates a function that takes in the speed of the vehicle and then evaluates if the car was speeding or not then gives the driver demerit points according to their speed //
function calculateDemeritPoints() {
  let speed = parseInt(document.getElementById("speed").value);
  let demeritPoints = 0;
  // Checks the input value of the speed to chech if its more than the speed limit and calculate the demerit points //
  if (speed > 70) {
    demeritPoints = Math.floor((speed - 70) / 5);
  }
  // Checks whether the demerit points are more than 12 and output the value "License Suspended!" //
  if (demeritPoints > 12) {
    document.getElementById("demerit-points").innerText =
      "Demerit Points: " + demeritPoints + ", License Suspended!";
  } else {
    document.getElementById("demerit-points").innerText =
      "Demerit Points: " + demeritPoints;
  }
}
