// after ES6
// syntactical sugar

class User {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
    
    encryptPassword (){
        return `${this.password}abschffksk`
    }

    changeUsername () {
        return `${this.name.toUpperCase()}`
    }
}

const suva = new User ('suvadeep', 'suva@email.com', 284483)

// console.log((suva.changeUsername()));




// behind the scene

function Mser(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

Object.prototype.encryptPassword = function (){
    return `${this.password}abfgf`
}

const tea = new Mser ("Mser", 'mser@test.com', "orjtn#cc")

// console.log(tea.encryptPassword());