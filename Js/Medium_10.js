"use strict";
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btnCha").addEventListener("click",function(){
        function getRandomColor() {
            const r = Math.floor(Math.random() * 256); // 0-255
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        document.body.style.backgroundColor = getRandomColor();

    })

})