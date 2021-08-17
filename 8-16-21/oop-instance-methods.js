// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//       this.name = name;
//       this.role = role;
//     }
  
//     renderDetails() {
//         console.log(`${this.name}: ${this.role}`);
//     }
// }


// const jon = new Instructor({name: 'Jon Snow'});
// const bryce = new Instructor({name: 'Bryce', role: 'teacher'});
// jon.renderDetails();
// bryce.renderDetails();


class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car({year: 2021, brand: 'Tesla', poweredBy: 'electricity'});
console.log(model3.carSpecs());