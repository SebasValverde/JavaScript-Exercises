"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let timer = null;

    document.getElementById("btnCountD").addEventListener("click", function () {
        let number = parseInt(document.getElementById("Num").value);
        let Countdown = document.getElementById("Countdown");

        if (isNaN(number) || number < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid number',
                text: 'Please enter a valid positive number'
            });
            return;
        }
        if (number === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid number',
                text: 'Please enter a number different than 0'
            });
            return;
        }

        if (timer !== null) {
            clearInterval(timer);
        }

        let count = number;

        function Timer() {
            Countdown.textContent = count;
            count--;
            if (count < 0) {
                clearInterval(timer);
                timer = null;
            }
        }

        Timer(); 
        timer = setInterval(Timer, 1000);
    });
});
