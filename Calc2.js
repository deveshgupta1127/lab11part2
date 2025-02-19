const readline = require("readline-sync");

// Importing operation modules
const Addition = require("./Addition");
const Subtraction = require("./Subtraction");
const Multiplication = require("./Multiplication");
const Division = require("./Division");

console.log("Select operation.");
console.log("1. Addition");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

while (true) {
    // Take input from the user
    let choice = readline.question("Enter choice (1/2/3/4): ");

    // Check if choice is valid
    if (["1", "2", "3", "4"].includes(choice)) {
        let num1 = parseFloat(readline.question("Enter first number: "));
        let num2 = parseFloat(readline.question("Enter second number: "));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter a number.");
            continue;
        }

        if (choice === "1") {
            console.log(`${num1} + ${num2} = ${Addition.add(num1, num2)}`);
        } else if (choice === "2") {
            console.log(`${num1} - ${num2} = ${Subtraction.subtract(num1, num2)}`);
        } else if (choice === "3") {
            console.log(`${num1} * ${num2} = ${Multiplication.multiply(num1, num2)}`);
        } else if (choice === "4") {
            console.log(`${num1} / ${num2} = ${Division.divide(num1, num2)}`);
        }

        // Ask if the user wants another calculation
        let nextCalculation = readline.question("Let's do next calculation? (yes/no): ");
        if (nextCalculation.toLowerCase() === "no") {
            break;
        }
    } else {
        console.log("Invalid Input");
    }
}
