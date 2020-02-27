//STEP 1.	Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
console.log("STEP 1");

function halfNumber(num) {
  var half = num /2;
  console.log("Half of " + num + " is " + half);
  return half;
}
halfNumber(5)

//STEP 2.	Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
console.log("STEP 2");
        
function squareNumber(num) {
var squareNamber = num * num;
console.log('The result of squaring the number ' + num + ' is ' + squareNamber);
return squareNamber;
}
squareNumber(3);

//STEP 3.	Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
console.log("STEP 3");

function percentOf(num1, num2) {
  var percent = (num1 / num2) * 100;
  console.log(num1 + " is " + percent + "% of " + num2);
  return percent;
}
percentOf(2,4)

//STEP 4.	Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
console.log("STEP 4")
        
function findModulus(num1, num2) {
  var modulus = num1 /2;
  console.log(modulus + " is the modulus of " + num1 + " and " + num2);
  return modulus;
}        
findModulus(4, 10)  

//STEP 5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.
console.log("STEP 5")
let sumN = 0, numS, a;
for (a = 0; a < 3; a += 1) {
while (true) {
numS = parseInt(window.prompt("Enter the number"), 10);
if (numS >= 0 && numS <= 1000) {
sumN += numS;
break;
} else {
window.document.write("Sum is " + sumN);
}
}
}
window.document.write("Sum is " + sumN);
console.log("Sum is " + sumN);
        