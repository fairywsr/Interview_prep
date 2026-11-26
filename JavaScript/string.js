// function reverseWord(str) {
//   let reverseWord = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseWord += str[i];
//   }
//   return reverseWord;
// }
// console.log(reverseWord("abcc"));

// 2️⃣ Check if a String is a Palindrome

const palindrome = "madam";
let isPalindrome = "";
for (let i = palindrome.length - 1; i <= 0; i--) {
  isPalindrome += palindrome[i];
  console.log(isPalindrome[i]);
}
if (isPalindrome === palindrome) {
  console.log(`${palindrome} is palandrom string`);
} else {
  console.log(`${palindrome} is not palandrom string`);
}
