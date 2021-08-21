export default function () { // Cannot have multiple default functions in an export file
    return '<div>Logo</div>';
}

export function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

export const greeting = 'Hi there';