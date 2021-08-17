// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//       this.name = name;
//       this.role = role;
//     }
        // Instance method
//     renderDetails() {
//         console.log(`${this.name}: ${this.role}`);
//     }
        // Base case static method
//     static helloWorld() { // Does not require object to work
//         console.log('Hi there');
//     }
        // Static method
//     static canTeach(instructor) {
//         return (instructor.role === 'classroom');
//     }
// }

// // Instructor.helloWorld();

// let jake = new Instructor({ 'name': 'Jake', 'role': 'classroom' });
// console.log(
//     `${jake.name} can teach: ${Instructor.canTeach(jake)}`
// );

// let bryce = new Instructor({ 'name': 'Bryce' });
// console.log(
//     `${bryce.name} can teach: ${Instructor.canTeach(bryce)}`
// );



class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

let choice1 = new Home({ 'type': 'house', 'payment': 'mortgage' });
console.log(
    `${Home.homeImprovement(choice1)}`
);

let choice2 = new Home({ 'type': 'apartment' });
console.log(
    `${Home.homeImprovement(choice2)}`
);