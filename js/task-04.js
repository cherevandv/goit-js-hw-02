"use strict";

const formatString = function (string) {
  if (string.length > 40) {
    let counterLetter = string[0];
    for (let i = 1; i <= 40; i += 1) {
      counterLetter += string[i];
    }
    return `${counterLetter}...`;
  }
  return string;
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// // вернется форматированная строка

console.log(
  formatString(
    "Кажется, мой код - просто какой-то бред:)Но почему-то он работает"
  )
);
