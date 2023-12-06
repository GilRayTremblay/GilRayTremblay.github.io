let max = prompt("Enter the maximum number:");
let guess = 0;
let magicNumber = Math.floor(Math.random() * max);

guess = prompt("Please enter your first guess:");

while (guess != 'q') {

    if (guess < magicNumber) {
        guess = prompt('Too low! Please enter another guess');
    }
    else if (guess > magicNumber) {
        guess = prompt('Too high! Please enter another guess');
    }
    else if (guess == magicNumber) {
        alert('You win!!');
        break;
    }
}
