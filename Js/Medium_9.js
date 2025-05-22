"use strict";

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btnCount").addEventListener("click",function(){
        let text = document.getElementById("text").value.trim();
        let result = document.getElementById("result");
        let count2 = text.replace(/\s/g, "").length;
        console.log(count2);

        if (text === "") {
            result.textContent = "Please enter a valid text.";
            return;
        }
        let count= 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " ") {
                count++;
            }           
        }
        result.textContent= `The text has ${count} Characters`;

        Swal.fire({
            title: 'Info',
            text: "I use a for loop to count, but another solution is:\nlet count= text.replace(/\\s/g, '  ').length;",
            icon: 'info',
            confirmButtonText: 'Got it!'
        });
    })
    

})