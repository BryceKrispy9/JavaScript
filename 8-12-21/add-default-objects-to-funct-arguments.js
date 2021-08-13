// const blog = {
//     title: "My great post",
//     summary: "Summary of the post"
// }

// const openGraphMetadata = ({ title, summary = "A DailySmarty Post" }) => { // Use the summary = "" to have it default to that if it is optional
//     console.log(`
//         og-title=${title}
//         og-description=${summary}
//     `);
// }

// openGraphMetadata(blog);

const user = {
    username: 'BryceKrispy',
    status: 'away'
}

user.status = 'active'; // CHANGE OBJECT PROPERTY***

const loginEvent = ({ username, status}) => {
    return `${username} is ${status = 'active'}`;
}

console.log(loginEvent(user));