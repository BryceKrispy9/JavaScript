const headingGenerator = (title, typeOfHeading) => {
    return `
        <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
}

console.log(headingGenerator('Greetings', 2));
console.log(headingGenerator('Hi there', 1));