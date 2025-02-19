function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

console.log(divide(10, 0)); // Output: "Error! Division by zero."
