"use strict";

const checkForSpam = function (message) {
  if (
    message.toLowerCase().includes("sale") ||
    message.toLowerCase().includes("spam")
  ) {
    return `true`;
  }
  return `false`;
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
