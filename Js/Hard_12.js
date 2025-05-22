const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    const inputLength = document.getElementById("inputLength");
    const checkbox1 = document.getElementById("includeNumbers");
    const checkbox2 = document.getElementById("includeSymbols");
    const generatedPassword = document.getElementById("Password");

    let length = parseInt(inputLength.value);

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".,?;:_-¡!¿*%$/()[]{}|@><";

    if (checkbox1.checked) base += numbers;
    if (checkbox2.checked) base += symbols;

    generatedPassword.textContent = generatePassword(base, length);
};

document.addEventListener("DOMContentLoaded", () => {
    const btnGenerate = document.getElementById("btnGen");
    btnGenerate.addEventListener("click", generate);
    
});


