// Array for--of using generator
let userArray = ["Ahmed",25,"Cairo"];
function* arrayIterator() {
    for (let key in this) {
        yield this[key];
    }
}
userArray[Symbol.iterator] = arrayIterator;
 for (let value of userArray) {
   console.log(value);
}
 console.log("==================");
// Object for--of using iterator
let userObject = { name: "Ali", age: 23, city: "Alex" };
function objectIterator() { 
    let keys = Object.keys(this);
    let currentIndex = 0;
    return {
        next: () => {
            if (currentIndex < keys.length) {
                return { value: this[keys[currentIndex++]], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}
userObject[Symbol.iterator] = objectIterator;
for(let value of userObject) {
    console.log(value);
}