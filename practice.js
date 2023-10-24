// I. Variable & Datatypes

// A. Q + A

// How do we assign a value to a variable?

// type the variable name and type "=" and assign value e.g. (let x = 7)

// How do we change the value of a variable?

// type the variable name you want to change the value of and type "=" and assign value e.g. (x = 9)

// How do we assign an existing variable to a new variable?

// type the new variable name and type "=" and type existing variable name e.g.(let z = x)

// Remind me, what are declare, assign, and define?

// Declare is to create a variable e.g. (let x). Assign is to assign value to variable e.g.(x = 7). Define is to 
// put code in the body of a function.

// What is pseudocoding and why should you do it

// pseudocoding is writing a code in plain English. You should do it so that it makes it easier to 
// write the code itself.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// About 5%

// ##########################################################################
// B strings     
// ##########################################################################

// Create a variable called firstVariable

// const firstVariable

// Assign it the value of the string "Hello World"

// firstVariable = "Hello World"

// Change the value of this variable to some number

// firstVariable = 7

// Store the value of firstVariable in a new variable called secondVariable

// const secondVariable = firstVariable

// Change the value of secondVariable to any string.

// secondVariable = "Hello World"

// What is the value of firstVariable?

// Value of firstVariable is 7

// Create a variable called yourName and set it equal to your name as a string. 
// Then, write an expression that takes the string "Hello, my name is " and the variable
//  yourName so that it returns a new string with them concatenated.

//  const yourName = "Ralph"

//  const greeting = "Hello, my name is " + yourName

// #####################################################################
// C Booleans
// #####################################################################

// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a < b && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a === a && a < d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');

// ######################################################################
// D Farm             
// ######################################################################

// Declare a variable animal. Set it to be either "cow" or something else

// const animal = "cow"

// Write code that will print out "mooooo" if the it is equal to cow

// if (animal === "cow"){
//     console.log("mooooo")
// }

// Change your code so that if the variable animal is anything other 
// than a cow, it will print "Hey! You're not a cow."

// if ( animal !== "cow"){
//     console.log("Hey! You're not a cow.")
// }

// ###############################################################
// E Driver's Ed
// ###############################################################

// Make a variable that holds a person's age; be semantic

// let age = 44

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, 
// a message should print "Sorry, you're too young."

// if (age >= 16){
//     console.log("Here are the keys!")
// }
// else {
//     console.log("Sorry, you're too young.")
// }


// #################################################################
// II   Loops
// #################################################################

// A The basics

// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for(let i = 0; i <=10; i++){
//     console.log(i)
// }

// Write a loop that will print out all the numbers from 10 up to and including 400

// for(let i = 10; i<=400; i++){
//     console.log(i)
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for(let i = 12; i <= 4000; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
// }

// B Get even  

// Print out the numbers that are within the range of 1 - 100

// for(let i = 1; i<= 100; i++){
//     console.log(i)
// }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(let i =1; i <=100; i++){
//     if(i % 2 === 0){
//         console.log(i + " is an even number")
//     }
// }

// C Give me Five

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for(let i = 5; i<=100; i++){
//     if(i % 5 === 0){
//         console.log("I found a " + i + ". High five!")
//     }
// }

// Add to the code from above to print out "I found a number. Three is a crowd" if
//  the number is a multiple of three

//  for(let i = 3; i<=100; i++){
//     if(i % 5 === 0){
//         console.log("I found a " + i + ". High five!")

//     }
//     if(i % 3 === 0){
//         console.log("I found a " + i + ". Three is a crowd")

//     }
// }

// For numbers divisible by both three and five, be sure your code prints both messages

// for(let i = 3; i<=100; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log("I found a " + i + ".Three is a crowd. High five!")

//     }

// }

// D Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

// let bank_account = 0
// for(let i = 0; i <= 10; i++){
//     bank_account += i
// }
// console.log("$" + bank_account)

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the
//  numbers between 1 - 100 multiplied by 2.

//  bank_account = 0
//  for(let i = 0; i<=100; i++){
//     bank_account += i * 2
//  }
//  console.log("$"+bank_account)

// ################################################################
// III Arrays & Control flow
// ################################################################

// A  
// What are the things in an array called?

// They are called Elements  

// Do Arrays guarantee those things will be in order?

// No. Arrays can be [6, 5, 9, 0, 1]

// What real-life thing could you model with an array?

// Real-life that you could model in an array is the monthly rainfall level for one year
// e.g. [1.2, 2, 3.3, 2.4, 5, 2, 1.3, 1.5, 1.2, 2, 1.3, 1.4]

// B  Easy Does it   

// Create an array that contains three quotes and store it in a variable called quotes

// quotes = ["Hello", "Good", "Morning"]

// C Accessing Elements

// Given the following array 
// const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// const array = randomThings[0]

// Change the value of "Hello" to "World"

// randomThings[2] = "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log(randomThings)

// D Change values   

// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?

// ourClass[2]

// Change the value of "Github" to "Octocat"

// ourClass[4] = "Octocat"

// Add a new element, "Cloud City" to the array

// ourClass.push = "Cloud City"

// E Mix it Up  

// Given the following array: 

// const myArray = [5, 10, 500, 20]

// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.

// myArray.push("Aegon")

// myArray.push("Robot") 

// Remove the 5 from the beginning of the array.

// myArray.shift()

// Add the string "Bob Marley" to the beginning of the array.

// myArray.unshift("Bob Marley")

// Remove the string of your choice from the end of the array.

// myArray.pop()

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
// What does mutate mean? Did the .reverse() method return anything?

// myArray.reverse()
// Yes, it mutated the Array. Mutate means that a change happen to the original Array.
// Yes, it returned the mutated Array.

// F Biggie Smalls   

// Create a variable that contains an integer.

// let x = 7

// console.log()s "little number" if the number is entered is less than 100

// if (x < 100){
//     console.log("little number")
// }

// console.log()s big number if the number is greater than or equal to 100.

// if (x >= 100){
//     console.log("big number")
// }

// G Monkey in the Middle

// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

// const x = 6

// if (x < 5){
//     console.log("little number")
// }
// else if (x > 10) {
//     console.log("big number")
// }
// else {
//     console.log("monkey")
// }

// H What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that "
//    + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristy is rocking that " + kristynsCloset[2] + " today!")

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset[6] = "raybans"

// console.log(kristynsCloset)

// console.log(thomsCloset[0][0])

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[5] = "stained knit hat"

// console.log(kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// console.log(thomsCloset[0][0])

// In the same way, access one item from Thom's pants array.

// console.log(thomsCloset[1][2])

// Access one item from Thom's accessories array.

// console.log(thomsCloset[2][1])

// Log a sentence about what Thom's wearing. Example:
//  "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " +   thomsCloset[1][0] + " and " + thomsCloset[2][1])

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[0][2] = "Footie Pajamas"


// IV. Functions

// A. printGreeting

// Do you think you could write a function called printGreeting with a parameter name that returns 
// a greeting with the argument interpolated into the greeting?

// function printGreeting(name){
//     return `Hello there, ${name}!`
// }
// console.log(printGreeting("Slimer"))

// B. printCool

// Write a function printCool that accepts one parameter,
//  name as an argument. The function should print the name and a message saying that that person is cool.

//  function printCool(name) {
//     return `${name} is cool`
//  }

//  console.log(printCool("Captain Reynolds"))

//  C. calculateCube

// Write a function calculateCube that takes
//  a single number and prints the volume of a cube made from that number.

//  function calculateCube(number){
//     console.log(number * number * number)
//  }

//  calculateCube(3)

//  D. isVowel

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
// false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
//  In general, when you write functions, take a minute to test them with different values to make sure 
// they behave the way you want.

// function isVowel(character1) {
//     chars = ['a', 'e', 'i', 'o', 'u']
//     if (chars.includes(character1.toLowerCase())) {
//         console.log(true)
//     }
//     else
//         console.log(false)
// }

// isVowel("E")

// E. getTwoLengths

// Write a function getTwoLengths that accepts two parameters (strings). 
// The function should return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths(str1, str2){
//     const leng1 = str1.length
//     const leng2 = str2.length

//     return [leng1, leng2]
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"))

// F.getMultipleLengths

// Write a function getMultipleLengths that accepts a single parameter
//  as an argument: an array of strings.The function should return an array 
//  of numbers where each number is the length of the corresponding string.

// function getMultipleLengths(str1) {
//     let list1 = []
//     for (let i = 0; i < str1.length; i++) {
//         list1.push(str1[i].length)
//     }
//     return list1
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

// maxOfThree

// Define a function maxOfThree that takes three numbers as arguments and 
// returns the largest of them.If all numbers are the same, it doesn't 
// matter which one is returned.If the two largest numbers are the same,
//     one of them should be returned.Be sure to test it with larger values in each of the three locations.

// function maxOfThree(x, y, z) {
//     if (x === y && y === z) {
//         return x
//     }
//     else if (x > z && y > z && x === y) {
//         return x
//     }
//     else if (y> x && z > x && y === z) {
//         return y
//     }
//     else {
//         return z
//     }

// }
// console.log(maxOfThree(6, 9, 1))

// H. printLongestWord

// Write a function printLongestWord that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the
//  method should return the word that appears first in the array.

//  function printLongestWord(array1){
//     let longWord = ""
//     let long = 0
//     for(let i = 0; i < array1.length; i++)
//         if (array1[i].length > long){
//             long = array1[i].length
//             longWord = array1[i]
//         }
//         return longWord
//  }
//  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "PeanutButter", "big", "Todd"]))


// Objects

// Let's set up an object data structure. Let's say we have a website that
//  sells products, and we have a user of our website, and we want to store
//   that user's data. The object data structure is a good way
//    to organize the data from our user.

const user = {name: "Ralph",
                email: "lee.ralph@sbcglobal.net",
                age: 48,
                purchased: []
}

// B. Update the user

//     Our user has changed his or her email address. Without changing the original
//      user object, update the email value to a new email address.

user.email = "pythoncode62@gmail.com"

console.log(user)

// Our user has had a birthday! Without changing the original user object, increment 
// the age value using the postfix operator. Hint: age++

user.age++
console.log(user)

// C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.

//     Without changing the original user object, add a new key location to the object, 
//     and give it a value or some-or-other location (a string).

user["location"] = "America"

console.log(user)

// D. Shopaholic!

//     Our user has purchased an item! They have purchased some "carbohydrates". 
//     Using .push(), add the string "carbohydrates" to the purchased array.

    user.purchased.push("carbohydrates")
    console.log(user)

    // Our user has purchased an item! They have purchased some "peace of mind". Using .push(),
    //  add the string "peace of mind" to the purchased array.

     user.purchased.push("peace of mind")
     console.log(user)

    //  Our user has purchased an item! They have purchased some "Merino jodhpurs". Using 
    //  .push(), add the string "Merino jodhpurs" to the purchased array.

     user.purchased.push("Merino jodhpurs")

    //  Console.log just the "Merino jodhpurs" from the purchased array. 
     
     console.log(user.purchased[2])

//     E. Object-within-object

// Remember that you can add an object to an existing object in the same way that 
// you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}

console.log(user)
// Write a friend object into your user object and give the friend a name, age,
//  location, and purchased array (empty for now)

user.friend.location =  "France"
console.log(user)
user.friend.purchased = []

// Console.log just the friend's name

console.log(user.friend.name)

// Console.log just the friend's location

console.log(user.friend.location)

// CHANGE the friend's age to 55

user.friend.age = 55
console.log(user)

// The friend has purchased "The One Ring". Use .push() to add
//  "The One Ring" to the friend's purchased array.

user.friend.purchased.push("The One Ring")
console.log(user)

// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.

user.friend.purchased.push("A latte")
console.log(user)

// Console.log just "A latte" from the friend's purchased array.

console.log(user.friend.purchased[1])

// F. Loops

//     Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array),
//      and prints each element to the console.

for(let i =0; i<user.purchased.length; i++){
    console.log(user.purchased[i])
}

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for(let i = 0; i<user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

// G. Functions can operate on objects

//     Write a single function updateUser that takes no parameters. When the function is run, it should:

//     it should increment the user's age by 1
// make the user's name uppercase

    function updateUser(){
       user.age++
       let x = user.name.toUpperCase()
       user.name = x
    }
    updateUser()
    console.log(user)

    // Write a function oldAndLoud that performs the exact same tasks as updateUser, 
    // but instead of hard-coding it to only work on our user object, make it take 
    // a parameter person, and have it modify the object that is passed in as an
    //  argument when the function is called. 
    // Call your oldAndLoud function with user as the argument.

    function oldAndLoud(person){
        person.age++
        person.name.toUpperCase()
    }
    oldAndLoud(user)
    console.log(user)

   

    