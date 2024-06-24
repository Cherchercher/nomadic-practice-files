// example car object:
const Car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue"
}

// refactor the above car object to represent a multitude of other cars
function Vehicle(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

// It's common to rewrite toString methods as the default implementation returns [Object object], not very useful
Vehicle.prototype.toString = function (){
    `The Vehicle's make is ${make}, model is ${model}, year is ${year}, color is ${color}`;
}

// And we can create a new car/an instance of Vehicle with 
let car1 = new Vehicle('Honda', 'Civic', 2019, "yellow");
let car2 = new Vehicle('Mazda', 'Hatchback', 2020, "white");

console.log(car1.toString());


// Few ways to do it. 1. Using constructor function

function Truck(make, model, year, color, cargoCapacity) {
    // No need to say this.make = make etc.
    Vehicle.call(this, make, model, year, color);
    // Call the parent constructor, with optional year and color, don't look typical/correct?
    this.cargoCapacity = cargoCapacity;
  }

// Define the Truck object that inherits from Vehicle
Truck.prototype = Object.create(Vehicle.prototype);

// Point the constructor back to Truck so it's accurate
Truck.prototype.constructor = Truck;

let truck1 = new Truck('Tesla', 'Cyber Truck', 2023, 'yellow', 3000 );

console.log(truck1.toString());

// Overwrite the toString function
Truck.prototype.toString = function() {
    return `The ${this.color} ${this.make} ${this.model}  ${this.year} Truck has a cargo capacity of ${this.cargoCapacity}`;
}

let truck2 = new Truck('Tesla', 'Cyber Truck', 2023, 'orange', 3000 );
console.log(truck2.toString());

// 2. Using the class syntax, more verbose, but easier to understand/more common across languages
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    toString = () => {
        `The Vehicle's make is ${make}, model is ${model}, year is ${year}, color is ${color}`;
    }
  }

  class Truck extends Vehicle {
    constructor(make, model, year, color, cargoCapacity) {
        super(make, model, year, color)
        this.cargoCapacity = cargoCapacity;
    }

    toString = () => {
        `The ${this.color} ${this.make} ${this.model}  ${this.year} Truck has a cargo capacity of ${this.cargoCapacity}`;
    }
  }


// Truck.prototype = Object.create(Truck.prototype);
// Truck.prototype.constructor = Truck;
Object.setPrototypeOf(Truck.prototype, Vehicle.prototype);
// Create an instance of Truck
var myTruck = new Truck('Tesla', 'Cyber Truck', 2023, 'yellow', 3000 );
// Check if properties belong to the objects using hasOwnProperty
console.log(myTruck.hasOwnProperty('cargoCapacity'));  // true
console.log(myTruck.hasOwnProperty('make'));  // false (inherited from Vehicle)




// How to compare two objects?
// The equality == and strict equality === operators for objects work exactly the same i.e two objects are equal only if they share the same reference to the memory.
// For instance, if two variables reference the same object, they are equal:
const a = {};
const b = a;
console.log(b == a); // return true
const c = {};
console.log(c == a); //return false

//  In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
// There are some fundamentals in objects that we want to know. For example, the property prototypes, 
// Object prototypes


// The different between Null and Undefined….

// Object is an very important concept in javascript.

// https://www.codemotion.com/magazine/frontend/javascript/javascript-alternatives/ 

// Different types: primitive, https://stackoverflow.com/questions/5156196/are-strings-objects#:~:text=In%20JavaScript%2C%20strings%20are%20not,They%20are%20primitive%20values.


// The set of types in the JavaScript language consists of primitive values and objects.


// Primitive values (immutable datum represented directly at the lowest level of the language)
// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type
// Symbol type
// Objects (collections of properties)
// Value properties
// These global properties return a simple value. They have no properties or methods.
// Infinity
// NaN
// undefined
// globalThis
// Function properties
// These global functions—functions which are called globally, rather than on an object—directly return their results to the caller.

// isFinite()
// isNaN()
// parseFloat()
// parseInt()
// encodeURI()
// encodeURIComponent()
// decodeURI()
// decodeURIComponent()

// Fundamental objects
// These are the fundamental, basic objects upon which all other objects are based. This includes general objects, booleans, functions, and symbols.
// Object
// Function
// Boolean
// Symbol
// Error objects
// Error objects are a special type of fundamental object. They include the basic Error type, as well as several specialized error types.
// Error
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError
// Numbers and dates
// These are the base objects representing numbers, dates, and mathematical calculations.
// Number
// BigInt
// Math
// Date
// Text processing
// These objects represent strings and support manipulating them.
// String
// RegExp
// Indexed collections
// These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.
// Array

// Keyed collections
// These objects represent collections which use keys. The iterable collections (Map and Set) contain elements which are easily iterated in the order of insertion.
// Map
// Set


// Structured data
// These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).
// SharedArrayBuffer
// Atomics
// DataView
// JSON
// Control abstraction objects
// Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example).
// Promise
// Generator
// Generator Function
// AsyncFunction
// AsyncGenerator
// Async Generator Function
// https://dev.to/neisha1618/callbacks-vs-promises-4mi1#:~:text=With%20callback%20we%20pass%20a,on%20the%20returned%20promise%20object.&text=A%20callback%20is%20a%20function,another%20function%20has%20finished%20executing.
// Reflection
// Reflect
// Proxy
// Internationalization
// Additions to the ECMAScript core for language-sensitive functionalities.
// Intl
// Intl.Collator
// Intl.DateTimeFormat
// Intl.ListFormat
// Intl.NumberFormat
// Intl.PluralRules
// Intl.RelativeTimeFormat
// Intl.Locale





// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// https://www.google.com/search?q=how+to+avoid+sql+injection&rlz=1C5CHFA_enUS889US889&oq=how+to+avoid+sql+injection&aqs=chrome..69i57j0i512l9.4589j0j7&sourceid=chrome&ie=UTF-8

// Reflect - proxy handlers, proxy - can intercept and redefine fundamental operations for that object.


// How to set, get, configure object properties? 

