const start = document.getElementById('start')
const stop = document.getElementById('stop')

let colorChanger;

start.addEventListener('click', (e)=>{
    let colorChange = () => {
        let colors = ['white', 'green', 'yellow', 'red', 'orange', 'pink', 'blue', 'voilet', 'pink']
        let randomColor = colors[Math.floor((Math.random()*9) + 1)]
        document.body.style.backgroundColor = randomColor
        console.log(randomColor);
    }
    colorChanger = setInterval(colorChange, 1000)
})

stop.addEventListener('click', (e)=>{
    clearInterval(colorChanger)
})