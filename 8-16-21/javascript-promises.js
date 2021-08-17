// What is a promise?
// Twitter > Posts
// Show page
// Show posts
// Shows failure after time

let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello! Welcome.')
    }, 2000);

    setTimeout(() => {
        reject(Error('The program is not responding...'))
    }, 2000);
});

sleepyGreeting // If everything goes right....
    .then(data => { // then = what happens in code block
        console.log(data); // data is our hello string or whatever is being called
    })
    .catch(err => { // If everything goes wrong "catch the error"
        console.error(err);
    });


    

let webpageLoader = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Webpage loaded successfully!')
    }, 2000);

    setTimeout(() => {
        reject(Error('Webpage could not be loaded, please try again'))
    }, 2000);
});

webpageLoader
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });