"use strict";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("BtnSum").addEventListener("click", function () {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let resultElement = document.getElementById("result");

        if (num1 === "" || num2 === "") {
            result.textContent = "Please enter a valid number in both fields.";
            return;
        }

        let sum = parseFloat(num1) + parseFloat(num2);
        resultElement.textContent = `Result: ${sum}`;
    });
});