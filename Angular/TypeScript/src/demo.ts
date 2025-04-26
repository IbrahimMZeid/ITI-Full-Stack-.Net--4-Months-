//--define an array with string and number values only
var arr: (string | number)[] = [1, 2, 6, 3, 5, "a", "b", "c", "d", "e"];
var arr2: (string | number)[] = [1, 2, 6, 3, 5];
var arr3: (string | number)[] = ["a", "b", "c", "d", "e"];
 
//-- write a function that accept an array of numbers or string
function sum(arr: (string | number)[]) {
  var sum: number = 0;
  var numberFlag: boolean = arr.every((item) => typeof item == "number");
  var stringFlag: boolean = arr.every((item) => typeof item == "string");
  if (numberFlag) {
    for (var i: number = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        sum += arr[i] as number;
      }
    }
    return sum;
  } else if (stringFlag) {
    return arr.join(",");
  } else {
    return arr.filter((item) => typeof item == "number").sort();
  }
}

console.log(sum(arr));
console.log(sum(arr2));
console.log(sum(arr3));
