// let button = document.getElementById('Generate-btn');
// let c = document.getElementById('captcha');

// function generate() {
//     let captcha = '';
//     let string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-+";
//     for (let i = 0; i<8; i++){
//         let c = string[Math.floor(Math.random()*string.length)];
//         captcha = captcha + c;
//     }
//     return captcha;
// }

// button.addEventListener('click', () => {
//     const password = generate(); // You can pass desired length here
//     c.textContent = `Generated Captcha: ${password}`;
//   });


let button = document.getElementById('Generate-btn');
let captchaDisplay = document.getElementById('captcha');

function generate() {
    let captcha = '';
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-+";
    for (let i = 0; i < 8; i++) {
        let randomChar = characters[Math.floor(Math.random() * characters.length)];
        captcha += randomChar;
    }
    return captcha;
}

button.addEventListener('click', () => {
    const captcha = generate();
    captchaDisplay.textContent = `Generated Captcha: ${captcha}`;
});
