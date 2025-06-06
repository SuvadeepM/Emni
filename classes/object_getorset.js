const User = {
    _email: 's@sm.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


// another method for creating and using getters-setters