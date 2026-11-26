// 1️⃣ Reverse a String (Manual Method Only)
// function reverseWord(str) {
//   let reverseWord = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseWord += str[i];
//   }
//   return reverseWord;
// }
// console.log(reverseWord("abcc"));

// 2️⃣ Check if a String is a Palindrome
// method-1 check palindrome
// const palindrome = "noon";
// let isPalindrome = "";
// for (let i = palindrome.length - 1; i >= 0; i--) {
//   isPalindrome += palindrome[i];
//   console.log(isPalindrome);
// }
// if (isPalindrome === palindrome) {
//   console.log(`${palindrome} is palandrom string`);
// } else {
//   console.log(`${palindrome} is not palandrom string`);
// }

// method-2 o(n)
// function checkPalindrome(str) {
//   let leftIndex = 0;
//   let rightIndex = str.length - 1;
//   while (leftIndex < rightIndex) {
//     if (str[leftIndex] !== str[rightIndex]) {
//       console.log(`${str} is not palindrome`);
//       return false;
//     }
//     leftIndex++;
//     rightIndex--;
//   }
//   console.log(`${str} is palindrome`);
//   return true;
// }

// leftindex           rightIndex
// word is madam
// 0                      4
// 1                      3
// 2                      2
// 3                      1
// 4                      0
// checkPalindrome("hello");
// checkPalindrome("abba");
// checkPalindrome("abbc");
// checkPalindrome("yelley");

// 3️⃣ Count Frequency of Each Character
// function countFrequency(str) {
//   const frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     frequency[str[i]] = (frequency[str[i]] || 0) + 1;
//     console.log(`${frequency[str[i]]} = ${(frequency[str[i]] || 0) + 1}`);
//   }
//   return frequency;
// }
// console.log(countFrequency("Banana"));

const obj = new Object();
obj["hello"] = obj.hello = 3;
obj["hello_jj"];
console.log(obj);
