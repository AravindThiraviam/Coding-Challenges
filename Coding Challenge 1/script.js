/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/


var massAravind = 62.95; // kg
var heightAravind = 1.69; // meter


var massVicky = 63; 
var heightVicky = 1.69;

var BMIAravind = massAravind / (heightAravind * heightAravind);
var BMIVicky = massAravind / (heightVicky * heightVicky);
console.log(BMIAravind,BMIVicky);

var AravindHigherBMI = BMIAravind > BMIVicky;
console.log('Is Aravind\'s BMI higher than Vicky\'s BMI ?' + AravindHigherBMI);
