// The Basic Calculator , ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide.
//1.	Prompt the user for a number and store that in a variable.
//2.	Prompt the user for a second number and store that in a variable.
//3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
//4.	Create a new named function called calculate() that accepts 3 parameters.
//5.	Call the calculate function and pass in the 3 variables as parameters.  --HINT: You will need to convert the 2 numbers from strings to numbers.
// 6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
// 7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.
/* with a SWITCH statement */
var num1 = parseFloat(window.prompt("Enter the number"));
var num2 = parseFloat(window.prompt("Enter the number."));
var choice = window.prompt('Make choice of math operation: (add, subtract, multiply, divide)'); 
   
function calculate(num1, num2, choice) {  
   switch (calculate) {
case "add":
window.alert(num1 + num2);
break;
case "subtract":
window.alert(num1 - num2);
break;
case "multiply":
window.alert(num1 * num2);
case "divide":
window.alert(num1 / num2);               
default:
window.document.write('Make choice of math operation: (add, subtract, multiply, divide)');
}
/*  */
//calculate(num1, num2) --- with loop if/else if;

var num1 = parseFloat(window.prompt("Enter the number"));
var num2 = parseFloat(window.prompt("Enter the number."));
var choice = window.prompt('Make choice of math operation: (add, subtract, multiply, divide)'); 
    var result;
function calculate(num1, num2, choice) {  
       if (choice == add) {
           result = num1 + num2;  
       } else if (choice == substract) {
           result = num1 - num2;
       } else if (choice == multiply) {
           result = num1 * num2;
       } else if (choice == divide) {
           result = num1 / num2;
       }         
       
} window.alert("The calculated result is: " + result); 
