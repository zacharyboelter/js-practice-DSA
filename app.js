
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







//~~~~~~~~~~~~~~~~~~~Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.~~~~~~~~~~~~~~


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


// ~~~~~~~~~~~~~~~~~~Square(n) Sum~~~~~~~~~~~~~~~~~~~~~~~
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




// ~~~~~~~~~~~~Create a function that gives a personalized greeting. This function takes two parameters: name and owner.~~~~~~~~~~~

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



// ~~~~~~~~~~~~~~~Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.~~~~~~~~~~~

// function countSheep(num) {
//     let str = ''
//     for (let i = 1; i <= num; i++){
//         str += `${i} sheep...`
//     }
//     return str
// }

// console.log(countSheep(10))


// ~~~~~~~~~~~~~~~~~~~Write function RemoveExclamationMarks which removes all exclamation marks from a given string.~~~~~~~~~~~~~~~~~~~

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



// ~~~~~~~~~~~~~~~Write a function to split a string and convert it into an array of words.~~~~~~~~~~~~~~~~~~

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

// ~~~~~~~~~~~~Remove first and last characters~~~~~~~~~~~~~~~~

// function removeChar(str){
//     return str.slice(1, -1)
// }

// removeCharacter = str => str.slice(1, -1)


// ~~~~~~~~~~~~~ Double each element in array ~~~~~~~~~~~~~~~~

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

//~~~~~~~~~~invert values~~~~~~~~~~~~~


// function reverse(array){                                //for loop that pushes reverse nums to new array
//     let newArr = []
//     for (i = 0; i < array.length; i++){
//         newArr.push(array[i] * -1)
//     }
//     return newArr
//   }

// const invert = array => array.map(num => -num);         // arrow function that maps over and creates new array of inverted nums


// function invert(array) {
//     return array.map( x => x === 0 ? x : -x);           // map over using ternary 
//  }

//   console.log(invert([1,2,3,4,5, -132]))


// ~~~~~~~~~~~~~~~~~~~~Reversed Strings~~~~~~~~~~~~~~~~~~~~~~~~~
//Complete the solution so that it reverses the string passed into it. 

// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('livingston'))



//~~~~~~~~~~~~~~  MakeUpperCase  ~~~~~~~~~~~~~~~~~~
//Write a function which converts the input string to uppercase.

// function capitalize(str) {
//     return str.toUpperCase()
// }

// const upperCase = (str) => str.toUpperCase()


// ~~~~~~~~~~~~~ SquareEveryDigit ~~~~~~~~~~~~~~~~~
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//     return Number(('' + num).split('').map(function (val) { return val * val }).join('')) // turn num to string, split each char, map over and square, join back together
// }

// console.log(squareDigits(2))
// console.log(squareDigits(2442))
// console.log(squareDigits(12))
// console.log(squareDigits(343))
// console.log(squareDigits(555))
// console.log(squareDigits(545))
// console.log(squareDigits(5))



//~~~~~~~~~~~~~~~Boolean to String~~~~~~~~~~~~~~~~~~
//write a function that converts a boolean to a string

// function booToStr(b){
//     return b.toString()
// }

// console.log(booToStr(true))


// ~~~~~~~~~~~~~~~~ Highest and Lowest ~~~~~~~~~~~~~~~~~~
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


// function highAndLow(numbers) {
//     const arr = numbers.split(' ')                        //split string to new array. 
//     return `${Math.max(...arr)} ${Math.min(...arr)}`      // return the max of new array, and min of new array via spread opp
// }

// function highAndLow(numbers){   
//     numbers = numbers.split(' ').map(Number);                                   // .map(Number) converts all things to int 
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

// console.log(highAndLow('1 2 5 8 15 77 -91 50 78'))


// ~~~~~~~~~~~~~~~~~~ Beginner Series #1 School Paperwork ~~~~~~~~~~~~~~~~~~~~~~~
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// function paperWork(n, m) {
//     if (n < 0 || m < 0)
//     {
//         return 0
//     } else {
//         return n * m
//     }
// }

// console.log(paperWork(3, 5))
// console.log(paperWork(13, 15))
// console.log(paperWork(-3, 35))
// console.log(paperWork(4, 0))





//  ~~~~~~~~~~~~~~~~~~~ Sentence Smash ~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


// function smash(words){
//     return words.join(' ')
// }

//  ~~~~~~~~~~~~~~~~~~~~~ Counting Sheep ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// function countSheep(arrOfSheep){
//     total = 0
//     for (let i = 0; i < arrOfSheep.length; i++){
//         if (arrOfSheep[i] == true){
//             total += 1
//         }
//     }
//     return total
// }


// function sheeps(arrayOfSheep){
//     return arrayOfSheep.filter(Boolean).length
// }

// console.log(sheeps([true, true, true, false, true]))
// console.log(countSheep([true, true, true, false, true, true]))


// Count by X

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
// Examples

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


const countBy = (x, n) => {
    const z =[]                             //set empty array
    for (let i = 1; i <= n; i++){           //loop through n
        z.push(i * x)                       //multiply the looped by x and push to empty array
    }
    console.log(z)
    return z                                //return new array
}

countBy(1, 10)
countBy(10, 100)
countBy(2, 34)
countBy(55, 11111)