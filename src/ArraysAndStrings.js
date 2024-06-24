
// forEach(): This method executes a provided function once for each array element. It's a concise way to iterate through an array without the need for a traditional for loop.
const array = [1, 2, 3, 4];
array.forEach(element => console.log(element));


// map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It's useful for transforming elements of an array into a new array.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]


// filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function. It's handy for selecting specific elements from an array based on certain criteria.
const words = ['apple', 'banana', 'cherry', 'date'];
const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords); // Output: ['banana', 'cherry']


// reduce(): The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It's useful for performing calculations or aggregating data.
const numbersToReduce = [1, 2, 3, 4];
const sum = numbersToReduce.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10


// find(): The find() method returns the first element in the array that satisfies the provided testing function. It's helpful for locating a single element in an array based on a condition.
const numbersToFind = [1, 2, 3, 4];
const found = numbersToFind.find(num => num > 2);
console.log(found); // Output: 3


// Strings
// charAt(index): Returns the character at the specified index in a string.

const str = 'hello';
console.log(str.charAt(0)); // Output: 'h'


// concat(...strings): Combines the text of two or more strings and returns a new string.
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Output: 'Hello World'

// includes(searchString[, position]): Determines whether one string may be found within another string.
const str3 = 'hello world';
console.log(str3.includes('world')); // Output: true


// indexOf(searchValue[, fromIndex]): Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.
const str4 = 'hello world';
console.log(str4.indexOf('world')); // Output: 6


// slice(startIndex[, endIndex]): Extracts a section of a string and returns it as a new string.
const str5 = 'hello world';
console.log(str5.slice(6)); // Output: 'world'


// toUpperCase(): Returns the calling string value converted to uppercase.
const str6 = 'hello';
console.log(str6.toUpperCase()); // Output: 'HELLO'


// toLowerCase(): Returns the calling string value converted to lowercase.
const str7 = 'HELLO';
console.log(str7.toLowerCase()); // Output: 'hello'


// trim(): Removes whitespace from both ends of a string.
const str8 = ' hello world ';
console.log(str8.trim()); // Output: 'hello world'


