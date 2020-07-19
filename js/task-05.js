"use strict";

const checkForSpam = function (message) {
  return (
    message.toLowerCase().includes("sale") ||
    message.toLowerCase().includes("spam")
  );
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
