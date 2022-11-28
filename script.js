function miniGolf() {
let userName = prompt("Welcome to GC mini golf! What is your name?");

console.log("Player Name: " + userName);

let courseNumber = prompt(" Hi " + userName + "! Would you like to play 3 or 6 holes today?");
let holeOne = 0;
let holeTwo = 0;
let holeThree = 0;
let holeFour = 0;
let holeFive = 0;
let holeSix = 0;

/*let totalSix = holeOne += holeTwo += holeThree += holeFour += holeFive += holeSix;

let parSix = 18;

let scoreSix = (totalSix -= parSix);*/

if (courseNumber == 3) {
    console.log("You're playing " + courseNumber + " holes today. (par 9)");
    holeOne = Number( prompt("How many putts for hole 1? (par is 3)") );
    holeTwo = Number( prompt("How many putts for hole 2? (par is 3)") );
    holeThree = Number( prompt("How many putts for hole 3? (par is 3)") );
    totalThree = holeOne += holeTwo += holeThree;
    console.log("Total putts: " + totalThree);
    var parThree = 9;
    var scoreThree = totalThree -= parThree;
    if (scoreThree <= -1) {
    console.log("Great job, " + userName + "! Your total par was: " + scoreThree);
    } else if (scoreThree >= 1) {
    console.log("Nice try, " + userName + "... Your total par was: +" + scoreThree);
    } else {
        console.log("Good game, " + userName + ". Your total par was: " + scoreThree);
    }
} else if (courseNumber == 6) {
    console.log("You're playing " + courseNumber + " holes today. (par 18)");
    holeOne = Number( prompt("How many putts for hole 1? (par is 3)") );
    holeTwo = Number( prompt("How many putts for hole 2? (par is 3)") );
    holeThree = Number( prompt("How many putts for hole 3? (par is 3)") );
    holeFour = Number( prompt("How many putts for hole 4? (par is 3)") );
    holeFive = Number( prompt("How many putts for hole 5? (par is 3)") );
    holeSix = Number( prompt("How many putts for hole 6? (par is 3)") );
    totalSix = holeOne += holeTwo += holeThree += holeFour += holeFive += holeSix;
    console.log("Total putts: " + totalSix);
    var parSix = 18;
    var scoreSix = totalSix -= parSix;
    if (scoreSix <= -1) {
    console.log("Great job, " + userName + "! Your total par was: " + scoreSix);
    } else if (scoreSix >= 1) {
    console.log("Nice try, " + userName + "... Your total par was: +" + scoreSix);
    } else {
        console.log("Good game, " + userName + ". Your total par was: " + scoreSix);
    }
} else {
    alert("Sorry. " + courseNumber + " hole(s) isn't an option. Please try again.")
    location.reload();
}
}
