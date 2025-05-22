"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const rollBtn = document.getElementById("rollBtn");
    const sumDisplay = document.getElementById("sumDisplay");

    rollBtn.addEventListener("click", function () {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        dice1.textContent = roll1;
        dice2.textContent = roll2;

        const total = roll1 + roll2;
        sumDisplay.textContent = `You rolled a ${roll1} and a ${roll2}. Total: ${total}`;

        console.log(`Dice rolled: ${roll1} + ${roll2} = ${total}`);
    });
});