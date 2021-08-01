var userObj = { 
    email: 'Test@test.com',
    fullName: 'Tess Testy'
}

function dashboardGreeting() {
    var userObj = {
        email: 'brycepearson9@gmail.com',
        fullName: 'Bryce Pearson'
    }  
    console.log("Hi there, ".concat(userObj.fullName), "- Your current email is ".concat(userObj.email));
}

dashboardGreeting();
console.log(userObj.fullName);