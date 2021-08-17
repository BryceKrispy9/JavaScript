// User logs into system
    // verify credentials
        // redirect to page
            // update the account
                // API calls to brings user data
                    // .........
// Async and Await allow us to dictate entire process in a better format

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in')
        }, 2000);
    });
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login...');
        }, 2000);
    });
}

async function loginActivities() {
    const returnedLogin = await login();
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
}

console.log(loginActivities());