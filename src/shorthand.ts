class Student {
  constructor(public firstName: string, public age: number) {}

  greet() {
    console.log(`Hi, my name is ${this.firstName} and I'm ${this.age} years old.`);
  }
}

const student1 = new Student("John", 30);
student1.greet(); // Hi, my name is John and I'm 30 years old.
console.log(student1.firstName); // John ✅ accessible



/////////////


class Car {
  constructor(public make: string, public model: string, private mileage: number) {}

  drive(km: number) {
    this.mileage += km;
    console.log(`${this.make} ${this.model} drove ${km} km. Total mileage: ${this.mileage}`);
  }
}

const car1 = new Car("Toyota", "Corolla", 50000);
car1.drive(150); // Toyota Corolla drove 150 km. Total mileage: 50150
// console.log(car1.mileage); // ❌ Error: private


///////////


class Staff {
  constructor(public name: string, private salary: number) {}

  giveRaise(amount: number) {
    this.salary += amount;
    console.log(`${this.name}'s new salary is $${this.salary}`);
  }
}

const emp1 = new Staff("Alice", 50000);
emp1.giveRaise(5000); // Alice's new salary is $55000
// console.log(emp1.salary); // ❌ Error: private


///////////////


class ToDoList {
  constructor(public owner: string, private tasks: string[] = []) {}

  // Add a task
  addTask(task: string) {
    this.tasks.push(task);
    console.log(`Task added: "${task}"`);
  }

  // Remove a task
  removeTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(`Task removed: "${task}"`);
    } else {
      console.log(`Task not found: "${task}"`);
    }
  }

  // Get all tasks (read-only)
  getTasks() {
    return [...this.tasks]; // return a copy
  }
}

// Usage
const myList = new ToDoList("JR");

myList.addTask("Buy groceries");
myList.addTask("Clean the house");

console.log(myList.getTasks()); 
// ["Buy groceries", "Clean the house"]

myList.removeTask("Buy groceries");
console.log(myList.getTasks()); 
// ["Clean the house"]

// myList.tasks; // ❌ Error: private