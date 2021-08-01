{/* <div className = {hasPermission ? 'active' : 'disabled'}>

</div> */}

// function ageVerification(age) {
// //     if (age > 25) {
// //         console.log('can rent a car');
// //     } else {
// //         console.log('is not old enough');
// //     }

//     let answer = age > 25 ?  'can rent a car' : "can't rent a car"; // Ternary Operator 1. Coditional 2. If condiaiton was true 3. If conditional is false
//     console.log(answer);
// }

// ageVerification(15)

function adminControls(user) {
    // if (user) {
    //     if (user.admin) {
    //         console.log('Showing Admin controls');
    //     } else {
    //         console.log('You need to be an admin');
    //     }
    // } else {
    //     console.log('You need to be logged in');
    // }

    let response = user ? user.admin ? "Showing Admin controls" : "You need to be an admin" : "You need to be logged in";
    console.log(response);
}

let userOne = {
    name: 'Bryce',
    admin: true
}

let userTwo = {
    name: 'Devyn',
    admin: false
}

let userThree = null

adminControls(userThree);