"use strict";

let arrayWord;

const findLongestWord = function (string) {
  arrayWord = string.split(" ");
  let longestWord = "a";

  for (let i = 0; i < arrayWord.length; i += 1) {
    if (arrayWord[i].length > longestWord.length) {
      longestWord = arrayWord[i];
    }
  }

  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
