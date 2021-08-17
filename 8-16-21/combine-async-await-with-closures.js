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

async function loginActivities(login, updateAccount) { // Runs both lines at the same time in the combind time (4000ms)
    const returnedLogin = await login;
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
}

console.log(loginActivities(login(), updateAccount()));