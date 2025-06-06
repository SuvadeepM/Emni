class User {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
    
    get password () {
        return this._password.toUpperCase()
    }
    set password (value) {
        this._password = value
    }
    
}

