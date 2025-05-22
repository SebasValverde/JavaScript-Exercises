"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let num = 0;
    let Counter = document.getElementById("Counter");
    let BtnMin = document.getElementById("BtnMin");
    let BtnRest = document.getElementById("BtnRest");
    let BtnPlus = document.getElementById("BtnPlus");
    Counter.textContent = num;

    BtnMin.addEventListener("click", function(){
        if (num===0) {
            Swal.fire({
                title: 'Oops!',
                text: 'The counter cannot be less than 0.',
                icon: 'warning',
                confirmButtonText: 'Got it!'
            });    
            return;
        }
        num--;
        Counter.textContent = num;
    })

    BtnRest.addEventListener("click", function (){
        num = 0;
        Counter.textContent = num;
    })

    BtnPlus.addEventListener("click", function () {
        num++;
        Counter.textContent = num;
    });
});