// 'https://api.dailysmarty.com/posts'
// 'https://api.github.com/users/brycekrispy9/repos'

async function queryApis() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts'); // Return promise that it will resolve
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);

    const reposPromise = fetch('https://api.github.com/users/brycekrispy9/repos'); // Return promise that it will resolve
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
}

queryApis();