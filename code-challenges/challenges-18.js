'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let newArr = str.split(" ")
    let len = newArr.length;
    let index ;
    if (len % 2 == 1) {
        index = ((len/2) + 0.5) - 1
    }
    if(len % 2 != 1){
        index = ((len/2) + 1) - 1
    }
   let wordLength = newArr[index].toString().split("").length
   return wordLength
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let lenStr1 = str1.length;
    let lenStr2 = str2.length;
    let str1Arr = str1.split("").sort()
    let str2Arr = str2.split("").sort()
    if (lenStr1 != lenStr2){
    return false;}
    for(let i = 0; i < lenStr1; i++){
    if (str1Arr[i] != str2Arr[i]){
        return false;}
    }
    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };