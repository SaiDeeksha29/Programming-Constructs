//1 Random single digit
{
    let digit = Math.floor(Math.random() * 10);
    console.log(digit);
}

//2 Random dice
{
    let digit = Math.floor(Math.random() * 10) % 6 + 1;
    console.log("Dice Roll: " + digit);
}

//3 Sum of random dice
{
    let dice1 = Math.floor(Math.random() * 10) % 6 + 1;
    let dice2 = Math.floor(Math.random() * 10) % 6 + 1;
    let sum = dice1 + dice2;
    console.log("Dice Roll Sum: " + sum);
}

//4 Random 5  two-digit numbers
{
    let digit1 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
    let digit2 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
    let digit3 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
    let digit4 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
    let digit5 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
    let sum = digit1 + digit2 + digit3 + digit4 + digit5;
    let avg = sum / 5;
    console.log("sum: " + sum + " avg: " + avg);
}

//5 Conversion 
{
    let inch = 42;
    let feet = inch / 12;
    console.log("Feet : " + feet);
}

{
    let feet1 = 60;
    let feet2 = 40;
    let meter1 = feet1 / 3.28084;
    let meter2 = feet2 / 3.28084;
    let area = meter1 * meter2
    console.log("Area in meters : " + area);
    let areaInAcres = area * 0.000247105;
    console.log("Area in acres : " + areaInAcres);
}