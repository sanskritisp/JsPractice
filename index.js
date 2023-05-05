let firstAns = document.getElementById("first");
// console.log(firstAns);
var date = new Date();
console.log(date);
var day = date.getDay();
var dayList = ["Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday","Sunday"];
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var pre = hour >= 12 ? " PM " : " AM ";
firstAns.innerText = "Today is " + dayList[day] +  "." +  "Current time is " +  hour +   pre +  ":" +   minute +   ":" +  second;
  // ----------------------------------------------------------------------------------------------------------------------------------------;
let secondAns = document.getElementById("second");
let getArea = (a, b, c) => {
  let sum = a + b + c;
  let area = Math.sqrt(sum * ((sum - a) * (sum - b) * (sum - c)));
  secondAns.innerText =
    "Area of the triangle with sides " + a + " " + b + " " + c + " is " + area;
};
getArea(5, 6, 7);
// -----------------------------------------------------------------------------------------------------------------------------------------------

let thirdAns = document.getElementById("third");
let res = " ";
for (var year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0, 1);
  // console.log(d.getDay());
  if (d.getDay() === 0) res = res + "1st January is a Sunday on " + year + "\n";
}
thirdAns.innerText = res;
// --------------------------------------------------------------------------------------------------------------------------------------
let fourthAns = document.getElementById("forth");
var today = new Date();
//Christmas day
var christmas = new Date(today.getFullYear(), 11, 25);
// Check if Christmas has already passed this year
if (today.getMonth() == 11 && today.getDate() > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}
// Calculate the difference in days between today and Christmas
var one_day = 1000 * 60 * 60 * 24;
var days_left = Math.ceil((christmas.getTime() - today.getTime()) / one_day);

fourthAns.innerText = "There are " + days_left + " days left until Christmas.";
// ----------------------------------------------------------------------------------------------------------------------------------------
// let fifthAns = document.getElementById('fifth');
// const num = Math.ceil(Math.random());
// console.log(num);
// const guess = prompt('Guess the number between 1-10');
//  if (guess == num)
//    fifthAns.innerText = 'Matched';
//   else
//   fifthAns.innerText = 'Not matched, the number was '+guess;
//   ---------------------------------------------------------------------------------------------------------------------
// 6
let noOne = document.getElementById("numOne");
let noTwo = document.getElementById("numTwo");
let multiply = document.getElementById("mul");
let divide = document.getElementById("div");
let result = document.getElementById("result");
function multiplication() {
  r = noOne.value * noTwo.value;
  result.innerText = r;
}
function dividee() {
  r = noOne.value / noTwo.value;
  result.innerText = r;
}
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", dividee);

// 7--------------------------------------------------------------------------------------------------------------------------
let seven = document.getElementById("sevenAns");
let a = document.URL;
seven.innerText = a;

// 8 -------------------------------------------------------------------------------------------------------------------------
console.log("Ans 8:");
function sumTriple(x, y) {
  let sum = x + y;
  if (x === y) {
    sum = sum * 3;
  }
  return sum;
}
console.log(sumTriple(3, 4));
console.log(sumTriple(5, 5));
//   9.--------------------------------------------------------------------------------------------------------------------------
console.log("Ans 9:");
function checkJava(str) {
  if (str.startsWith("Java")) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(checkJava("JavaScript"));
console.log(checkJava("Python"));

// 10.-------------------------------------------------------------------------------------------------------------------
console.log("Ans 10:");
function makeString(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let firstThree = str.substring(0, 3).toLowerCase();
    let restOfString = str.substring(3);
    return firstThree + restOfString;
  }
}
console.log(makeString("HELLOWORLD"));
console.log(makeString("hi"));
console.log(makeString("a"));

// 11.---------------------------------------------------------------------------------------------------------------
console.log("Ans 11:");
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello"));

// 12.------------------------------------------------------------------------------------------------------------------
console.log("Ans 12:");
function rotateLeft(arr) {
  let first = arr.shift();
  console.log(first);
  arr.push(first);
  return arr;
}
console.log(rotateLeft([1, 2, 3]));

//   13.-----------------------------------------------------------------------------------------------------
console.log("Ans 13:");

function reverseArray(arr) {
  return [arr[2], arr[1], arr[0]];
}
console.log(reverseArray([1, 2, 3]));

// 14.------------------------------------------------------------------------------------------------------
console.log("Ans 14:");

function findLongestString(arr) {
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}
console.log(findLongestString(["dog", "cat", "elephant"]));

// 15.------------------------------------------------------------------------------------------------------------
console.log("Ans 15:");

function sumConsecutiveDifferences(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += Math.abs(arr[i] - arr[i - 1]);
  }
  return sum;
}
console.log(sumConsecutiveDifferences([4, 6, 8, 10]));

// 16.---------------------------------------------------------------------------------------------------
console.log("Ans 16:");

function swapAdjacentDigits(num) {
  let numString = num.toString();
  let swappedString = "";
  for (let i = 0; i < numString.length; i += 2) {
    swappedString += numString[i + 1] + numString[i];
  }
  return parseInt(swappedString);
}
console.log(swapAdjacentDigits(98765432));

// 17.--------------------------------------------------------------------------------------
console.log("Ans 17:");

function changeCapitalization(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      newString += char.toLowerCase();
    } else {
      newString += char.toUpperCase();
    }
  }
  return newString;
}
console.log(changeCapitalization("Hello World!"));

//   18.--------------------------------------------------------------------
console.log("Ans 18:");

function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/\d/.test(char)) {
      sum += parseInt(char);
    }
  }
  return sum;
}
console.log(sumDigits("JavaScript 2023"));

// 19.-----------------------------------------------------------------------------------------
console.log("Ans 19:");

function sumCubes(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}
console.log(sumCubes(4));

// 20.------------------------------------------------------------------------------------------
console.log("Ans 20:");

function checkSameDigits(num) {
  let firstDigit = num % 10;
  while (num) {
    if (num % 10 !== firstDigit) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}
console.log(checkSameDigits(222222));
console.log(checkSameDigits(12345));

// 21.--------------------------------------------------------------------------------------------------------------
console.log("Ans 21:");
function getLargestEvenNumber(arr) {
  var largestEven = null;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (largestEven === null || arr[i] > largestEven) {
        largestEven = arr[i];
      }
    }
  }
  return largestEven;
}
var arr = [2, 4, 5, 7, 10];
var largestEven = getLargestEvenNumber(arr);
console.log("The largest even number in " + arr + " is " + largestEven);
// 22.---------------------------------------------------------------------------------------------------------------------
console.log("Ans 22:");
function getFirstHalf(str) {
  if (str.length % 2 === 0) {
    var firstHalf = str.slice(0, str.length / 2);
    return firstHalf;
  } else {
    return null;
  }
}
var firstHalf = getFirstHalf("abcdefghijklmn");
console.log("The first half is " + firstHalf);

// 23.------------------------------------------------------------------------------------------------------------
console.log("Ans 23:");
function capitalizeWords(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
var str = "god bless you";
var capitalized = capitalizeWords(str);
console.log(capitalized);

// 24.------------------------------------------------------------------------------------------------------------------------
console.log("Ans 24:");
function checkValues(a, b) {
  if (a === 15 || b === 15) {
    return true;
  }
  if (a + b === 15 || Math.abs(a - b) === 15) {
    return true;
  }
  return false;
}
var num1 = 10;
var num2 = 5;
console.log(checkValues(num1, num2));

// 25.--------------------------------------------------------------------------------------------------------------------------
console.log("Ans 25:");
function checkNumber(num) {
  if (num <= 0) {
    return false;
  }
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  }
  return false;
}
console.log(checkNumber(21));

// 26.-------------------------------------------------------------------------------------------------------------------
console.log("ANS 26:");
function checkIntegers(num1, num2) {
  if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    return true;
  }
  return false;
}
let integer1 = 10;
let integer2 = 5;
console.log(checkIntegers(integer1, integer2));

// 27.-----------------------------------------------------------------------------------------------------------
console.log("ANS 27:");
function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
let temperatureInFahrenheit = convertToFahrenheit(20);
console.log("Temperature in Fahrenheit is:" + temperatureInFahrenheit);

let temperatureInCelsius = convertToCelsius(74);
console.log("Temperatur in Celsius is:" + temperatureInCelsius);

// 28.------------------------------------------------------------------------------------------------------------
console.log("Ans 28:");
function checkLastDigits(num1, num2, num3) {
  let lastDigit1 = num1 % 10;
  let lastDigit2 = num2 % 10;
  let lastDigit3 = num3 % 10;
  if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
    return true;
  }
  return false;
}
let number1 = 1234;
let number2 = 5674;
let number3 = 9014;
console.log(checkLastDigits(number1, number2, number3));

// 29.--------------------------------------------------------------------------------------------------------------
console.log("Ans 29:");
function countVowels(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let r = countVowels("Have a good day");
console.log("The number of vowels in the string is: " + r);

// 30.--------------------------------------------------------------------------------------------------------------------
console.log('Ans 30:');
function concatenateStrings(str1, str2) {
  let subStr1 = str1.substring(1);
  let subStr2 = str2.substring(1);
    return subStr1 + subStr2;
}
let string1 = "Heya";
let string2 = "Everyone";
console.log(concatenateStrings(string1, string2));


