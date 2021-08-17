const greeting = new Promise((resolve, reject) => {
    resolve('Success');
    reject('Failure');
});

const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating login...');
    reject('Error updating account with login');
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => { // Return data of promises (res = response)
    res.forEach(activity => { // forEach iterates over an array
        console.log(activity);
    })
});