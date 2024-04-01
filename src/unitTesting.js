https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing

let numbers = [];
for (let i = 0; i < 201; i++) {
    numbers.push(i);
}

function processNumber(numbersToProcess) {
    prev = -1
    for (let number of numbersToProcess) {
        if (number == 100) {
            print("halfway")
            continue
        }
        if (number % 2 == 0) {
            print(i);
        } 
        if (number != prev + 1) {
            throw Error;
        }
        prev += 1
    }
}


numbers[3] = 55

// In the control flow example, we had to alter the input to ensure that non continneous array triggers an error.
// Running the program one-off to ensure the condition is hit maybe ok for a simple program with only one or a few contributors.

// As a program expands in scale and involves more developers, functions may undergo alterations and potentially deviate from their intended behaviors. To ensure the continued correctness and reliability of software functions throughout the evolution of the program and programmers turnovers, we employ unit tests to systematically check for logical errors and maintain the integrity of the codebase.
// Unit tests are automated tests designed to validate the correctness of individual units of code, such as functions or methods, by systematically verifying their expected behavior against specific test cases.

// Typically, we cover each of the conditions, as well as edge cases where the function may misbehave in rare scenerios.
// A better way to test is write unit tests. For unit tests, we can use the assert statement, where the left is equal to the right
