"use strict";
class Database {
    // Make the constructor private so it can’t be called outside this class
    constructor() {
        console.log("Database connection created!");
    }
    // The static method that controls access to the instance
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    query(sql) {
        console.log(`Running query: ${sql}`);
    }
}
// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true — both are the same instance
////////////////////////
class Logger {
    constructor() {
        this.logs = [];
        console.log("Logger initialized!");
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${message}`);
        console.log(`[LOG] ${message}`);
    }
    getLogs() {
        return this.logs;
    }
}
// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Server started");
logger2.log("User logged in");
console.log(logger1 === logger2); // true
console.log(logger1.getLogs());
// [
//   "[2025-10-08T12:00:00.000Z] Server started",
//   "[2025-10-08T12:00:01.000Z] User logged in"
// ]
