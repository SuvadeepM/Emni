const box = document.getElementById('box');
const button = document.getElementById('change-color');
const string = document.getElementById('color-id');

function changeColour() {
    let items = '0123456789ABCDEF';
    let color = '#';
    for (let i = 1; i < 7; i++){
        let c = items[Math.floor(Math.random()* items.length)];
        color = color + c; 
    }
    return color;
}

button.addEventListener('click', ()=>{
    const newColor = changeColour();
    box.style.backgroundColor = newColor;
    string.innerText = `color id: ${newColor}`;
})