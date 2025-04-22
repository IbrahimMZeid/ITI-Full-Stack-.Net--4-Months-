function task1() {
  let num1 = 1;
  let num2 = 2;
  [num1, num2] = [num2, num1];
  console.log(num1, num2);
}

function task2() {
  let arr = [5, 2, 90, 54, 23, 0];
  let [max, min] = maxMin(arr);
  console.log(max, min);
}

function maxMin(nums) {
  return [Math.max(...nums), Math.min(...nums)];
}
function task3() {
  let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
  console.log(task3A(fruits));
  console.log(task3B(fruits));
  console.log(task3C(fruits));
  let liked_fruits = task3D(fruits);
  task3E(liked_fruits);
}
function task3A(arr) {
  return arr.every((fruit) => typeof fruit === "string");
}
function task3B(arr) {
  return arr.some((fruit) => fruit.startsWith("a"));
}
function task3C(arr) {
  return arr.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
}
function task3D(arr) {
  return arr.map((fruit) => `I like ${fruit}`);
}
function task3E(arr) {
  arr.forEach((fruit) => console.log(fruit));
}

function task4() {
  let nums = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6];
  console.log(positiveNums(nums));
}
function positiveNums(nums) {
  return nums.filter((num) => num > 0);
}

function task5() {
  let nums = [10, 20, 30, 40];
  console.log(sumArray(nums));
}
function sumArray(arr) {
  return arr.reduce((a, b) => a + b);
}
function task6() {
  let names = ["ahmed", "islam", "ibrahim", "fatma", "ali"];
  console.log(capitalizeStr(names));
}
function capitalizeStr(arr) {
  return arr.map((str) => str[0].toUpperCase() + str.slice(1));
}

function task7() {
  let str = "welcome to Iti";
  console.log(isLowerCase(str));
}
function isLowerCase(str) {
  return str.split("").every((char) => char === char.toLowerCase());
}

let filterStr = (arr, length) => arr.filter((str) => str.length > length);

function task8() {
  let strings = ["ahmed", "islam", "ibrahim", "fatma", "ali"];
  console.log(filterStr(strings, 3));
}