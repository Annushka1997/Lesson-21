"use strict";

// 1 Առաջին հարցի պատասխանը

const myArr = [1,5,7,30,45,26,8,7,2,9,1,0,10,5,7];

function myForEach (arr) {
    for (let i=0; i<arr.length; i++){
        console.log(`Index: ${i},Value: ${arr[i]}`);
    }
}

myForEach(myArr);

// 2 Երկրորդ հարցի պատասխանը 

const obj = {
    manufacturer: "BMW",
    production: "July 5,2003-2010",
    modelYears: "2004-2010",
    assembly:{
        germany:"Dingolfing",
        china: "Shenyang",
        mexico:"Toluca",
        india:"Chennai",
        russia:"Kaliningrad",
        thailand:"Rayong",
        indonesia:"Jakarta",
        egypt:"6th of October City"
    },
    designer: {
        first: "Boyke Boyer",
        second: "Davide Arcangeli",
        third: "Chris Bangle"
    }
};

// Object copy method 1 

function copyObject1 (mainObj){
    let copyObj = {};
    for (let key in mainObj) {
        copyObj[key] = mainObj[key]; 
    }
    return copyObj;
}
const objectCopyMethod1 = copyObject1(obj);

objectCopyMethod1.manufacturer = "AUDI";

console.log(obj);
console.log(objectCopyMethod1);

// Object copy method 2

const objectCopyMethod2 = Object.assign ({},obj);

objectCopyMethod2.modelYears = "2008";

console.log(obj);
console.log(objectCopyMethod2);

// Object copy method 3 

const objectCopyMethod3 = {...obj};

objectCopyMethod3.production = "July 1";

console.log(obj);
console.log(objectCopyMethod3);

// Object copy method 4 Պատճենում է բազմաթիվ մակարդակներով

const myNewCopy = JSON.parse(JSON.stringify(obj));

myNewCopy.assembly.germany = "HI";

console.log (obj);
console.log (myNewCopy);


// Երրորդ հարցի պատասխանը

const myArray = ['Barev','Sireli','Hayer']; 

// Array copy method 1 

const copyArrayWithSlice = myArray.slice();

copyArrayWithSlice[0] = "Hello";

console.log (myArray);
console.log (copyArrayWithSlice);

// Array copy method 2 

const copyArrayWithSpread = [...myArray];

copyArrayWithSpread[0] = "Privet";

console.log(myArray);
console.log(copyArrayWithSpread);

// Array copy method 2 

const myArray1 = [1,2,3]; 
const copyArrayWithSpread2 = [myArray, ...myArray1];

console.log(myArray);
console.log(copyArrayWithSpread2);

// Չորրորդ հարցի պատասխանը

const arr = [];
let arrIndex = 0;
let str = "";

function mySplitFunction (text) {
    for (let i=0; i<=text.length; i++) { 
        if (text[i] !== undefined) { 
            str += text[i];
        }
        if (text[i] === " " || text[i] === undefined) {
            arr[arrIndex] = str.trim();
            str = "";
            arrIndex += 1;   
        }
    }
    console.log (arr);
}

mySplitFunction("Barev Sami jan"); 


// Հինգերորդ հարցի պատասխանը 


const myArrayForSort = [7,8,5,2,1,6,8,2,9,8,2,4,5,51,2584,1000];

function mySortFunction (arr,length=arr.length-1,start=0) {
    if (arr.length < 2) {
        return arr;
    } else {
        const ptuyt = arr[length];
        const left = [];
        const right = [];
        while (start < length) {
            if (arr[start] < ptuyt) {
                left.push (arr[start]);
            } else {
                right.push(arr[start]);
            }
            start++;
        }
        return [...mySortFunction(left),ptuyt,...mySortFunction(right)];
    }  
}

console.log(mySortFunction(myArrayForSort));




