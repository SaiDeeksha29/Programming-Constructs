//1 Random 5 three-digit numbers
{
    let digit1 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    let digit2 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    let digit3 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    let digit4 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    let digit5 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    let max = digit1;
    let min = digit1;
    //max:
    if (digit2 > max)
        max = digit2;
    if (digit3 > max)
        max = digit3;
    if (digit4 > max)
        max = digit4;
    if (digit5 > max)
        max = digit5;
    //min:
    if (digit2 < min)
        min = digit2;
    if (digit3 < min)
        min = digit3;
    if (digit4 < min)
        min = digit4;
    if (digit5 < min)
        min = digit5;
    console.log("MAX: " + max);
    console.log("MIN: " + min);
}

//2 Day and month
{
    const prompt = require('prompt-sync')();
    let dayOfMonth = prompt("Enter day of month :");
    let month = prompt("Enter month :");
    if ((month == 3 && dayOfMonth >= 20 && dayOfMonth <= 31) && (month == 6 && dayOfMonth <= 20 && dayOfMonth > 0)) {
        console.log("True");
    }
    else if (month == 4 && dayOfMonth <= 30 && dayOfMonth > 0) {
        console.log("True");
    }
    else if (month == 5 && dayOfMonth <= 31 && dayOfMonth > 0) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}

//3 Leap year check
{
    const prompt = require('prompt-sync')();
    let year = prompt("Enter the year :")
    if (year >= 1000 && year < 10000) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0)
                    console.log("Leap Year");
                else
                    console.log("Not a leap year");
            }
            else
                console.log("Leap Year");
        }
        else
            console.log("Not a leap year");
    }
    console.log("Year " + year);
}

//4 Coin flip
{
    const HEAD = 0;
    let toss = Math.ceil(Math.random() * 10) % 2;
    if (toss == HEAD)
        console.log("Heads");
    else
        console.log("Tails");
}