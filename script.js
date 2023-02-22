
// Homework 2/21/2023

/*
1) Call startsWith and endsWith on the provided string to make them true.
const testString = "We can't stop here, this is bat country!"
*/

const testString = "We can't stop here, this is bat country!"

console.log("Starts with is " + testString.startsWith('We c'))
console.log("Ends with is " + testString.endsWith('t country!'))

// 2) 
// const replacedString = replace the word dog with cat

const stringOne = "The dog meows"

console.log("Original String: " + stringOne +"\nReplaced String: " + stringOne.replace('dog', 'cat'))



// const indexOfOver =  get the index of over from stringTwo

const stringTwo = "The cow jumped over the moon"

console.log("Index of 'over' from " + stringTwo + ": " + stringTwo.indexOf('over'))



// const lastIndex = get the last index of never from stringThree  

const stringThree = "Never gonna give you up never gonna let you down"

console.log("Last Index of 'never' from " + stringThree + ": " + stringThree.lastIndexOf('never'))


// 3) Fill in the appropriate arthmetic operator to match the output
let one = 5 // => 15
one += 10
console.log("5 + 10 = " + one)

let two = 90 // => 30
two /= 3
console.log("90 / 3 = " + two)

let three = 50 // => 25
three -= 25
console.log("50 - 25 = " + three)

let four =  20 // => 100
four *= 5
console.log("20 x 5 = " + four)

/*
4)
Write a program that takes a first and last name and formats them as follows:
const firstName = "ryan"
const lastName = "curtis"

// do some magic here...
=> "Ryan C."
*/

const firstName = "ryan"
const lastName = "curtis"

const finalName = firstName[0].toUpperCase() + firstName.slice(1,4) + " " + lastName[0].toUpperCase() + "."

console.log(firstName + " " + lastName + " => " + finalName )









