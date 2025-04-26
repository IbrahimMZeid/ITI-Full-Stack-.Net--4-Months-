"use strict";
//--define an array with string and number values only
var arr = [1, 2, 6, 3, 5, "a", "b", "c", "d", "e"];
var arr2 = [1, 2, 6, 3, 5];
var arr3 = ["a", "b", "c", "d", "e"];
//-- write a function that accept an array of numbers or string
function sum(arr) {
    var sum = 0;
    var numberFlag = arr.every((item) => typeof item == "number");
    var stringFlag = arr.every((item) => typeof item == "string");
    if (numberFlag) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number") {
                sum += arr[i];
            }
        }
        return sum;
    }
    else if (stringFlag) {
        return arr.join(",");
    }
    else {
        return arr.filter((item) => typeof item == "number").sort();
    }
}
console.log(sum(arr));
console.log(sum(arr2));
console.log(sum(arr3));
