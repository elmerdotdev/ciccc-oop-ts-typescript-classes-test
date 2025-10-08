"use strict";
class PaymentProcessor {
    // Concrete (normal) method — shared logic
    validate(amount) {
        if (amount <= 0) {
            console.log("Invalid payment amount.");
            return false;
        }
        return true;
    }
}
// Subclass 1
class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount) {
        if (this.validate(amount)) {
            console.log(`Processing credit card payment: $${amount}`);
        }
    }
}
// Subclass 2
class PayPalProcessor extends PaymentProcessor {
    processPayment(amount) {
        if (this.validate(amount)) {
            console.log(`Processing PayPal payment: $${amount}`);
        }
    }
}
// Usage
// const base = new PaymentProcessor(); // ❌ Error — cannot instantiate abstract class
const cc = new CreditCardProcessor();
cc.processPayment(100);
const paypal = new PayPalProcessor();
paypal.processPayment(50);
//////////////////////////
// Abstract base class
class Transport {
    constructor(name) {
        this.name = name;
    }
    // Shared method
    startRoute() {
        console.log(`${this.name} is starting its route.`);
    }
}
// Subclass: Bus
class Bus extends Transport {
    calculateFare(distanceKm) {
        return distanceKm * 2; // $2 per km
    }
}
// Subclass: Ferry
class Ferry extends Transport {
    calculateFare(distanceKm) {
        return distanceKm * 5; // $5 per km
    }
}
// Usage
const bus = new Bus("City Bus");
bus.startRoute(); // City Bus is starting its route.
console.log("Fare:", bus.calculateFare(10)); // Fare: 20
const ferry = new Ferry("Island Ferry");
ferry.startRoute(); // Island Ferry is starting its route.
console.log("Fare:", ferry.calculateFare(10)); // Fare: 50
