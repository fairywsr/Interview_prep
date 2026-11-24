const reverseWords = (sentence) =>
  sentence.trim().split(/\s+/).reverse().join(" ");
reverseWords(" JavaScript is fun "); // "fun is JavaScript"
const reverseEachWord = (sentence) =>
  sentence
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
reverseEachWord("Hello World"); // "olleH dlroW"
// Without built-in reverse — two-pointer swap on an array of words
function reverseWordsManual(sentence) {
  const words = sentence.trim().split(/\s+/);
  let left = 0,
    right = words.length - 1;
  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }
  return words.join(" ");
}
reverseWordsManual("one two three"); // "three two one"
