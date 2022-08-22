
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// function positiveSum(arr) {
//     let negatives = []                  // create new array to store negative numbers
//     let sum = 0                         // set overall sum to 0
//     for (i = 0; i < arr.length; i++){   //iterate through array
//       if (arr[i] < 0) {                 //if negative, push into new array
//         negatives.push(arr[i])
//       } else {
//         sum += arr[i]                   // else add them up
//       }
//     }
//     console.log(sum)
//     return sum                          // return the sum of all positive nums
      
//   }

// function positiveSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     console.log(sum)
// }

// positiveSum([1,-4,7,12])







//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


// function repeatStr(n, s) {
//     let repeatedString = ''             //set empty string
//     while (n > 0) {                     //while n is greater than 0, add string to empty string
//         repeatedString += s
//         n --                            //subtract 1 from the number parameter
//     }
//     console.log(repeatedString)
//     return repeatedString;              //return the finished string
//   }

// function repeatSTr(n, s){
//     let str = ''
//     for (i = 0; i < n; i++){
//         str += s
//     }
//     console.log(str)
//     return str
// }

// repeatSTr(6, 'fuck you ')


// function repeatStr(n, s){
//     if (n > 0){
//         return s.repeat(n)
//     }
// }

// function repeatStr(n, s) {
//     return s.repeat(n)
// }



// function squareSum(numbers){
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i] ** 2
//     }
//     console.log(sum)

// }


// Square(n) Sum
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// function squareSum(numbers) {
//     let sum = 0
//     for( let i = 0; i < numbers.length; i++) {
//         sum += numbers[i] **2
//     }
//     console.log(sum)
//     return sum
// }

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }


// (squareSum([4, 5, 30, 10]))




// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// function greet (name, owner) {
//     return name === owner ? 'Hello boss' :  'Hello guest';
//   }

// function greet (name, owner) {
//     if (name === owner) {
//         return 'Hello boss'
//     } else {
//         return 'Hello guest'
//     }
// }



// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// function countSheep(num) {
//     let str = ''
//     for (let i = 1; i <= num; i++){
//         str += `${i} sheep...`
//     }
//     return str
// }

// console.log(countSheep(10))


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function replaceAllExclamations(str){
//     let newStr = str.replace(/!/g, '') //this is a regExp way of removing the ! and the G makes it global
//     console.log(newStr)
//     return newStr
// }

// let replaceExclamations = (s) => s.replace(/!/g, '')
// let removeExclamationMarks = (s) => s.replace(/!/g,'');

// removeExclamationMarks = s => s.replace(/\!/g, '');

// removeExclamationMarks('!!!!!! Shit')
// replaceExclamations('!!!!!! Shit')
// // replaceAllExclamations('Hello! World! How! Are You!?')



// Write a function to split a string and convert it into an array of words.

// function stringToArray(str){
//     let newArr = str.split(' ')  //simple enough. just use split at any ' ' (space) and it creates an array
//     console.log(newArr)
// }

// stringToArray('Today i am going to really fucking hope that the stupid padres win a game for once.')

//  In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num){
//     if (num < 0) {
//         return num
//     } else {
//         return num * -1
//     }
// }

//Remove first and last characters

// function removeChar(str){
//     return str.slice(1, -1)
// }

// removeCharacter = str => str.slice(1, -1)


// function maps(x){
//     let newArr = []
//     for (let i = 0; i < x.length; i++){
//         newArr.push(x[i] * 2)
//     }
//     return newArr
// }

// function maps(x){
//     return x.map((n) => n * 2)
// }

// console.log(maps([23, 34, 45, 56, 67]))

//invert values


function reverse(array){                        //for loop that pushes reverse nums to new array
    let newArr = []
    for (i = 0; i < array.length; i++){
        newArr.push(array[i] * -1)
    }
    return newArr
  }

const invert = array => array.map(num => -num);  // arrow function that maps over and creates new array of inverted nums

  console.log(invert([1,2,3,4,5, -132]))