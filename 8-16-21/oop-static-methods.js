class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }

    static helloWorld() { // Does not require object to work
        console.log('Hi there');
    }

    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}

// Instructor.helloWorld();

let jake = new Instructor({ 'name': 'Jake', 'role': 'classroom' });
console.log(
    `${jake.name} can teach: ${Instructor.canTeach(jake)}`
);

let bryce = new Instructor({ 'name': 'Bryce' });
console.log(
    `${bryce.name} can teach: ${Instructor.canTeach(bryce)}`
);