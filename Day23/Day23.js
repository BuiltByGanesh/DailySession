console.log("Day 23 JS file loaded");

// operators

// Arithmetic Operators

let a = 10;
let b = 3;
console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.3333
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** b); // 1000

// Assignment Operators
let c = 5;
let d = 2;
c += d; // c = c + d
console.log("After += :", c); // 7
c -= d; // c = c - d
console.log("After -= :", c); // 5
c *= d; // c = c * d
console.log("After *= :", c); // 10
c /= d; // c = c / d
console.log("After /= :", c); // 5
c %= d; // c = c % d
console.log("After %= :", c); // 1

// Example: Using assignment operator to update savings
let savings = 1000;
savings += 500; // savings = savings + 500
console.log("Total savings after addition:", savings); // 1500



// Comparison Operators
console.log("Equal to:", a == b); // false
console.log("Strictly equal to:", a === b); // false
console.log("Not equal to:", a != b); // true
console.log("Strictly not equal to:", a !== b); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false
console.log("Greater than or equal to:", a >= b); // true
console.log("Less than or equal to:", a <= b); // false

// Example : Arthimetic
console.log(a*(a+b));

// Example :  Comparison Operators
let userAge = 25;

if(userAge >= 18){
    console.log("Eligible to vote");
}

// Logical Operators

let m = false;
let n = true;

console.log("And &&:", m && n );
console.log("or ||:", m || n)
console.log("! :", !m);


let hasTicket = true;
let hasID = false;

if(hasTicket && hasID){
    console.log("You can board the flight");
}else if(hasTicket){
    console.log("You can board the flight Without ID");
}else{
console.log("Access denied");
}

// Increment / Decrement Operators

console.log("Post increment: ", a++); // a = a + 1 , output a = 10 then after(+1) a = 11
console.log("A value: ", a);
console.log("Post Decrement: ", b--); // b = b - 1 , output b = 3 then after(-1) b = 2
console.log("Pre Increment: ", ++a); // a = a + 1 , first(+1) then output a = 12
console.log("Pre Decrement: ", --b); // b = b - 1 , first(-1) then output b = 1

var testClass = document.getElementsByClassName("test")[0];



