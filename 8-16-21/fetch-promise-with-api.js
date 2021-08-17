// console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts') // Fetch has a built in promise
// console.log('After fetch call');
// console.log(postsPromise);
// console.log('After program has run');

postsPromise
    .then(data => data.json())
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.url_for_post);
        });
    })
    .catch((err) => {
        console.log(err);
    });


/*
When entered 'item.title' in web browser:

Why is the Laravel framework one of the Topmost Trending PHP Frameworks in 2021?
instrument.js:109 4 Robust AI Use Cases To Empower E-commerce Business Development
instrument.js:109 Mobile App Development Service
instrument.js:109 Top Laravel Trends You Will Regret To Skip Out For The Best Web Development
2instrument.js:109 Healthcare software development
instrument.js:109 Dash, A Minority Business Enterprise (MBE), Builds Value for Healthcare
instrument.js:109 Top 4 Tools Of Java Web Application Framework Empowering In 2021
instrument.js:109 6 Unexpected Benefits you Get When you Outsource Java Development
instrument.js:109 A Detailed Guide to Create AI Apps Using Google cloud platform, Firebase, and Tensor Flow
*/