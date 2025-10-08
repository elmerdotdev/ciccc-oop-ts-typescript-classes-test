"use strict";
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    addInterest(rate) {
        this.balance += this.balance * rate;
    }
}
class SavingsAccount extends BankAccount {
    applyMonthlyInterest() {
        this.addInterest(0.01); // can access protected method
        console.log(`New balance: ${this.balance}`);
    }
}
const account = new SavingsAccount(1000);
// account.balance; // ❌ Error: 'balance' is protected
// account.addInterest(0.01); // ❌ Error: 'addInterest' is protected
account.applyMonthlyInterest(); // ✅ Works, prints updated balance
//////////////////////
class Employee {
    constructor(salary) {
        this.salary = salary;
    }
    increaseSalary(amount) {
        this.salary += amount;
    }
}
class Manager extends Employee {
    giveRaise(amount) {
        this.increaseSalary(amount); // ✅ Subclass can access protected
        console.log(`New salary: ${this.salary}`);
    }
}
const manager = new Manager(50000);
manager.giveRaise(5000); // New salary: 55000
// manager.salary;       // ❌ Error: 'salary' is protected
// manager.increaseSalary(5000); // ❌ Error: protected
