const prompt = require("prompt-sync")({sigint: true});
// loads prompt sync package(lets you ask user question), ({ sigint: true }): Adds an option so the program can be stopped with Ctrl+C

console.log("Simple Calculator")
console.log("1 = Add")
console.log("2 = Subtract")
console.log("3 = Multiply")
console.log("4 = Divide")
// Ask the user which operation

// const choice = prompt("Enter the number of the operation you want: ");
// Ask user which operation

// if (choice !== "1" && choice !== "2" && choice !== "3" && choice !== "4") { // checking if user input prompted numbers 1-4
//   console.log("Invalid operation. Please restart the calculator.");
//  process.exit(); // stops the program immediately if they didn't
// }
/*  top vs bottom is choice to break loop immediately or bottom loops  infinetely till valid input for now give them the tries    */
for (;;) { // infinite loop
  choice = prompt("Enter the operation (1-4): ");
  if (choice === "1" || choice === "2" || choice === "3" || choice === "4") {
    break; // valid input → exit loop
  } else {
    console.log("❌ Invalid operation, try again.");
  }
}


const num1 = parseFloat(prompt("Enter the first number: "))
const num2 = parseFloat(prompt("Enter the second number: "))
// tells user to chose two numbers to be taken and calculated
//prompt() returns the string "5.7" — as a string. parseFloat() converts a string into a decimal number


let result = 0; // empty variable to store the calculations of the two numbers the user will give to be calculated

if(choice === "1"){
    result = num1 + num2
    console.log(`${num1} + ${num2} = ${result}`)
} else if(choice === "2") {
    result = num1 - num2
      console.log(`Result: ${num1} - ${num2} = ${result}`);
} else if ( choice === "3"){
    result = num1 * num2
      console.log(`Result: ${num1} × ${num2} = ${result}`);

} else if(choice === "4"){
     if(num2 === 0 || num1 === 0){
        console.log("Cannot divide by zero!!!")
     } else {
        console.log(`result: ${num1} ÷ ${num2} =  ${result}`)
     }
}   else {
    console.log("Invalid operation")
}

// Perform calculation


