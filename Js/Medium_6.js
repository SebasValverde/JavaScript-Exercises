"use strict";
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btnRev").addEventListener("click", function (){
        let text = document.getElementById("text").value.trim();
        let result= document.getElementById("result");
        if (text === "") {
            result.textContent = "Please enter a valid text.";
            return;
        }

        function ReverseString(str) {
            return str.split("").reverse().join("");
        }

        let reverseText = ReverseString(text);
        result.textContent= `Result: "${reverseText}"`;

    })
})