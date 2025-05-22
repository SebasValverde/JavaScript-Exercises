"use strict";

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("btnNum").addEventListener("click", function (){
        let num = document.getElementById("Num").value.trim();
        let result= document.getElementById("result");

        if (num==="" || isNaN(num)) {
            result.textContent = "Please enter a valid number.";
            return;
        }
        if (num % 2 === 0) {
            result.textContent= "The number is even";
        }else{
            result.textContent= "The number is odd";
        }
    })

})