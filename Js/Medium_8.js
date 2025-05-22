"use strict";

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btnVer").addEventListener("click",function (){
        let word = document.getElementById("text").value.trim();
        let result = document.getElementById("result");

        if (word === "") {
            result.textContent = "Please enter a word.";
            return;
        }
        if (/\s/.test(word)) {
            result.textContent = "Please enter only one word without spaces.";
            return;
        }
        function ReverseString(str) {
            return str.split("").reverse().join("");
        }
        let revword= ReverseString(word);
        if (word=== revword) {
            result.textContent = "The word is a Palindrome";
            return;
        } else {
            result.textContent = "The word is not a Palindrome";
            return;
        }

    })

})