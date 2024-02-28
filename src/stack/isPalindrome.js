const Stack = require("../linked-list/stack");

// TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
function isPalindrome(text) {
  text = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (text.length === 0) return false;

  const stack = new Stack();

  const firstHalfLength = Math.floor(text.length / 2);

  // if string has a middle character, remove it - doesn't affect palindrome
  if (text.length % 2) {
    text = text.slice(0, firstHalfLength) + text.slice(firstHalfLength + 1);
  }

  // loop through text putting the first half into a stack, and then comparing the second half
  for (let i = 0; i < text.length; i++) {
    if (i < firstHalfLength) {
      stack.push(text[i]);
    }
    if (i >= firstHalfLength) {
      if (stack.pop() !== text[i]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isPalindrome;
