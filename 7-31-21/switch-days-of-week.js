var daysOfWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
}

switch (typeof daysOfWeek) {
    case "number":
        console.log('It is '.concat(daysOfWeek));
        break;
    default:
        console.log('Please enter a number')
}

daysOfWeek = 4;