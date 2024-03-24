// Creates a function that takes in the speed of the vehicle as an argument and then evaluates if the car was speeding or not and then deduct points from the driver //
function calculateDemeritPoints() {
    let speed = parseInt(document.getElementById("speed").value);
    let demeritPoints = 0;

    if(speed > 70) {
        demeritPoints = Math.floor((speed - 70) / 5);
    }

    if(demeritPoints > 12) {
        document.getElementById("demerit-points").innerText = "Demerit Points: " + demeritPoints + ", License Suspended!";
    }
    else {
        document.getElementById("demerit-points").innerText = "Demerit Points: " + demeritPoints;
    }
}