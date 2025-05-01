const button = document.getElementById('generate');
const line = document.getElementById('password');

function generatePassword() {
    let password = '';
    let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-+'

    for (let i = 0; i<16; i++){
        let character = characters[Math.floor(Math.random()*characters.length)];
        password += character;
    }
    return password;
}

button.addEventListener('click', () => {
    const password = generatePassword();
    line.textContent = `Generated Password: ${password}`;
})