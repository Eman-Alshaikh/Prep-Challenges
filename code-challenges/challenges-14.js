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
    // write your code here
    const lastSpace=str.lastIndexOf(" ");
    const ans = str.slice(lastSpace+1);
    return ans;
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    const splittedStr = str.split(" ");
    return splittedStr[splittedStr.length-1]; 
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
    // write your code here
    const splittedStr = str.split(" ");
    while(splittedStr.lastIndexOf('I')!= -1)
    {
        splittedStr.splice(splittedStr.lastIndexOf('I'),1,'We');
    }

    while(splittedStr.lastIndexOf('am')!= -1){
        splittedStr.splice(splittedStr.lastIndexOf('am'),1,'are');
    }

    while(splittedStr.lastIndexOf( 'was')!= -1){
        splittedStr.splice(splittedStr.lastIndexOf( 'was'),1,'were');
    }
    let ansStr="";
    splittedStr.forEach(element => {
        ansStr+=element+" "; 
    });

    return ansStr.substring(0,ansStr.length-1) ;
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    let ansArr="";
    for(let i=0;i<arr.length;i++){
        ansArr+=arr[i];
        if(i%4==0&&i!=0)
        ansArr+=", ";
        else
        ansArr+=" ";
    }
    return ansArr.substring(0,ansArr.length-1) ;

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
    // write your code here
    let counter =1 ;
    let ansArray=[]
    for(let i=1;i<=str.length;i++)
    {
        if (counter == 0 )
        {
            if(str[i-1]==' ')
            {
                ansArray+=' ';
                counter=1 ;
                continue;
            }
            else
            {
                counter=1;
                continue;
            }
        }
        if(str[i]==str[i-1])
        {
            counter++;
        }
        else
        {
            ansArray+=str[i-1]+counter;
            if(str[i]==' ')
            counter=0; 
            else
            counter=1 ;
        }
    }
    return ansArray; 
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };