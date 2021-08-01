function hiThere () {
    console.log('Hi there buddy'); // Void function - Gonna run but not return anything back
}

hiThere();

var storedText = hiThere();

storedText;



function hiThereTwo() {
    return 'Hi there again'; // Simply defining a function
}

hiThereTwo(); // Calling the function

var storedTextTwo = hiThereTwo();

storedTextTwo;



function userAuthentication () {
    if (user) {
        if (user.admin) {
            console.log('Showing Admin controls');
        } else {
            console.log('You need to be an admin');
        }
    } else {
        console.log('You need to be logged in')
    }
}

user = {
    name: 'Bryce',
    admin: true
}

userAuthentication(user);