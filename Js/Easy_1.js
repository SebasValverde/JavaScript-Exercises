"use strict";
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("BtnRandom").addEventListener("click", function (){
        let result = document.getElementById("result");
        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
        result.textContent= getRandomInt(101);
    })


})