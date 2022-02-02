'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    const words = str.split(' ');

    if (words.length === 1) {
        return str;
    }
    let lastWord = words.slice(-1);
    return lastWord.toString();
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    const x = str.split(" ");
    return x[x.length - 1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let newArr = str.split(" ");
    newArr.forEach(element => {
        if (element == "I") {
            newArr.splice(newArr.indexOf(element),1,"We");
            
        }
        if (element == "am") {
            newArr.splice(newArr.indexOf(element),1,"are");
            
        }
        if (element == "was" ) {
            newArr.splice(newArr.indexOf(element),1,"were");
            
        }
        
    });
    return newArr.toString().replace(/,/g, ' ');
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {

   for (let i = 0; i < arr.length; i++) {
       if (i % 4  === 0 && i != 0){
     
        arr[i] = arr[i] + ",";
       }
       
   }
   return arr.join(" ");

//    Another soloution : 
//    arr.splice(4,1,`${arr[4]},`);
//    return arr.join(" ");
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {


    var result = str.charAt(0);
    var count = 1;
    if (str.length == 1) {
        result += count;
        return result;
    } else {
        for(var i=1;i<str.length;i++) {
            if(str.charAt(i) == str.charAt(i-1)) {
                count++;
            } else {
                
                result += count + str.charAt(i);
                count = 1;
            }
            if (i == str.length - 1) {
                result += count;
            }
            if (str.charAt(i) == " "){
                count = '' ; 
                result = result ;
            }
        }
        return result;
    }
}




module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };