function setUserName (username) {
    this.username = username
    console.log('called');
}

function createUser (username, email, password){
    this.email = email
    this.password = password
    setUserName.call(this, username)
}

const suva = new createUser ("suvadeep", "test@email.com", 12345)
console.log(suva);

console.log(suva.user);