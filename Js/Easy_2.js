"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("BtnCon").addEventListener("click",function(){
        let celsius = document.getElementById("celsius").value;
        let result = document.getElementById("result");
        if(celsius === ""){
            result.textContent = "Please enter a valid number.";
            return;
        }
        let resultFahrenheit = (parseFloat(celsius)*1.8)+32;
        result.textContent = `Result: ${resultFahrenheit}°F`;
    });

});