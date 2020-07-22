// let name = "Adeel", name1 = "Aman";
// console.log(name + " " + name1);
// let profile = {
// 	name : "anyone",
	uni : "UVAS",
	favColor : "Blue"
// };
// console.log(profile);


let myArray = ["Adeel", "Aman", "Burana", "Qureshi"];
myArray[9] = "Lahore";

console.log(myArray);

// for (let i = 0; i < myArray.length; i++) {
// 	console.log("Hello " + myArray[i])
// }
// var txt = "Hello World!";
// var x = 
// txt.length
// ;
// alert(x);
// var txt = 'We are the "vikings"';
// var txt = "we are the so called \"vikings\"";
// console.log(txt);
// str1 = "Hello";
// str1 += " World"
// console.log(str1);
// var txt = "abcdefghijklm";
// var pos = txt.indexOf("h");
// console.log(pos);


// let txt = "Hello world";
// let txtModified =txt.replace("Hello", "Hi");
// txtModified = txt.toUpperCase();
// console.log(txtModified);


let fruits = ["banana", "apple", "mango", "jaman"];

let x = fruits.pop();
console.log(x);
let y = fruits.push("all");
 y = fruits.push("total");
 fruits[5] = "And anot"
 console.log(fruits.length);


for (let i=0; i < fruits.length; i++) {
	console.log("I ate " + fruits[i]);
}

let myCurrentDate = new Date();
modifiedYear = myCurrentDate.setFullYear(2035);
console.log(myCurrentDate.getFullYear());

let random = Math.random();
console.log(random);

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log("Today is " +day);



var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

for (i = 0; i < 10; i++) {
  if (i == 5) {continue;}
  if (i == 6) {continue;}
  console.log(i);
}








































