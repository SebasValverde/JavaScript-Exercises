"use strict";
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("btnDate").addEventListener("click",function(){
        let result = document.getElementById("result");
        
        function updateTime() {
            let dateTime = new Date();
            let year = dateTime.getFullYear();
            let month = dateTime.getMonth() + 1;
            let day = dateTime.getDate();
            let hour = dateTime.getHours();
            let minute = dateTime.getMinutes();
            let second = dateTime.getSeconds();
            result.textContent = `Today is ${month}/${day}/${year} at ${hour}:${minute}:${second}`;
        }
        
        updateTime();
        setInterval(updateTime, 1000);
    })


})