class Passport {
  public readonly passportNumber: string;
  public holderName: string;

  constructor(passportNumber: string, holderName: string) {
    this.passportNumber = passportNumber; // can only set here
    this.holderName = holderName;
  }

  changeHolderName(newName: string) {
    this.holderName = newName; // ✅ allowed
  }
}

// Driver code
const passport = new Passport("X1234567", "Alice Smith");
console.log(passport.passportNumber); // X1234567
console.log(passport.holderName);    // Alice Smith

passport.changeHolderName("Alice Johnson");
console.log(passport.holderName);    // Alice Johnson

// passport.passportNumber = "Y7654321"; // ❌ Error: Cannot assign to 'passportNumber' because it is a read-only property