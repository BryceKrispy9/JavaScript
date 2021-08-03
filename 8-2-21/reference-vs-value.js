var someUser = {
    name: 'Blank'
};

function changeName(user) {
    return user.name = 'Jordan'; // Object
}

console.log(changeName(someUser));


var someName = 'Bryce';

function someOtherNameFormatter(name) {
    return name = 'Jordan'; // Not object
}

console.log(someOtherNameFormatter(someName));


userName = 'Bruce';

function changeNameTwo(userName) {
    return userName = 'Jordan'; // Object
}

console.log(changeNameTwo(userName));