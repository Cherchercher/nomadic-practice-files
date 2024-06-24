//variables and functions

const fixedInterestRate = 0.05
let deposit = 10000
let balance = (fixedInterestRate + 1) * deposit

console.log(balance)

deposit = 5000


balance = (fixedInterestRate + 1) * deposit


// To write the greeting program, we can use Function declarations starts with the word “function”, followed by its name “calculateBalance”, a pair of parentheses in which we place the parameters if any, followed by the function body.

function calculateBalance(deposit) {
	return deposit * (1+fixedInterestRate)
}

//statement produces values in console


// Now challenge time, can you write a simple greeting program, that takes a name, and returns a greeting?

function greet(name) {
    return "Hello, " + name;
}




// The other two ways of writing functions are arrow functions, and function expressions. Arrow functions provide a concise syntax for writing functions. They are often used for short, anonymous functions. 

// For example,  const divide = (a, b) => a / b, where the arrow replaces {} and return.

// In addition, we can use an anolymous function syntax to declare a function expression

// for example,
const multiply = function(a, b) {
 return a * b;
}; 



// Or, we can use a named function expression. The advantage of a named function expression is that we can refer itself, and that the function has a name for debugging purposes. For example, we can use it to calculate factorial of a number using recursion.

const factorial = function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}


//expressions and statements

