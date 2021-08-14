// Instantiation - Take blueprint and create real world object
class Account {
    constructor({ username, password }) { // Constructor - Run all processes everytime a new 'instructor' is created
        this.username = username; // Attribute of 'Instructor'
        this.password = password;
    }
}

const user = new Account({ username: 'brycepearson9', password: 'password' });
console.log(user.username);
console.log(user.password);