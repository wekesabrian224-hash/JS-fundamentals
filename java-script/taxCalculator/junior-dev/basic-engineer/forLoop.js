function mathTable(num1, num2) {
    if (!num1 || num1 < 0 || !num2 || num2 < 0) {
        console.error("Ensure number1 and number2 are numbers greater than 0");
        return;
    }

    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= num2; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

// Example usage
mathTable(5, 5);