// Question 1
var msg;
do {
  msg = prompt("Enter your Message");
} while (msg == null || msg == "");
for (var i = 1; i <= 6; i++) {
  document.writeln("<h" + i + ">" + msg + "</h" + i + ">");
}

// Question 2
var sum = 0;
do {
    var num = Number(prompt("Enter a number"));
    if (!isNaN(num))
        sum += num;
} while (sum < 100 && num != 0);
document.writeln("Sum = " + sum);

// // Question 3
// var num = Number(prompt("Enter a number"));
// var result = "";
// if (num % 3 == 0)
//     result+="Fizz";
// if (num % 5 == 0)
//     result+="Buzz";
// if (result == "")
//     result = "None";
// document.writeln(result);

// // Question 4
// var result = "";
// var answer = confirm("Do you fly?");
// if(answer == true){
//     answer = confirm("Are you Wild?");
//     if (answer == true) {
//         result = "Eagle";
//     } else {
//         result = "Parrot";
//     }
// } else {
//     answer = confirm("Do you live undersea?");
//     if (answer == true) {
//         answer = confirm("Are you Wild?");
//         if (answer == true) {
//             result = "Shark";
//         } else {
//             result = "Dolphin";
//         }

//     } else {
//         answer = confirm("Are you Wild?");
//         if (answer == true) {
//             result = "Lion";
//         } else {
//             result = "Cat";
//         }
//     }
// }
// document.writeln("<h1 style='text-align: center' >You are a " + result + " </h1>");
// document.writeln("<div style='text-align: center'><img src='./images/" + result + ".jpg' style='width:500px' /></div>");

// // Question 5
// var valid = false;
// do {
//     var username = prompt("Enter your name");
//     valid = isNaN(username);
// } while (!valid);

// valid = false;
// do {
//     var phoneNum = prompt("Enter your phone number");
//     valid = phoneNum.length == 8 && !isNaN(phoneNum)?true:false;
// }
// while (!valid);
// document.writeln(phoneNum);

// valid = false;
// do {
//     var mobileNum = prompt("Enter your mobile number");
//     valid = (/(010|011|012)[0-9]{8}/g).test(mobileNum);
// }while (!valid);

// valid = false;
// do {
//     var email = prompt("Enter your email");
//     valid = (/[a-zA-Z]{3}@[0-9]{3}.com/g).test(email);
// } while (!valid);

// valid = false;
// do {
//     var color = prompt("Enter your favorite color(red, green, blue)");
// switch (color.toLowerCase()) {
//     case "red":
//     case "green":
//     case "blue":
//         valid = true;
//         break;
//     default:
//         break;
// }
// } while (!valid);

// document.writeln("<h1>Entering User Info</h1><hr>");
// document.writeln("<p style='color:"+color+"'>Welcome dear guest : " + username + "</p>");
// document.writeln("<p style='color:"+color+"'>Your Telephone number is : " + phoneNum + "</p>");
// document.writeln("<p style='color:"+color+"'>Your Mobile number is : " + mobileNum + "</p>");
// document.writeln("<p style='color:"+color+"'>Your Email is : " + email + "</p>");
