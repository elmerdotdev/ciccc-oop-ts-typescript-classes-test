class MovieTicket {
  public movieTitle: string;
  private seatNumber: string;

  constructor(movieTitle: string, seatNumber: string) {
    this.movieTitle = movieTitle;
    this.seatNumber = seatNumber;
  }

  changeSeat(newSeat: string) {
    this.seatNumber = newSeat;
    console.log(`Seat changed to ${this.seatNumber} for "${this.movieTitle}"`);
  }

  getSeat() {
    return this.seatNumber;
  }
}

// Driver code
const ticket = new MovieTicket("Interstellar", "B12");
ticket.changeSeat("C5"); // Seat changed to C5 for "Interstellar"
console.log(ticket.movieTitle); // Interstellar ✅ public
// console.log(ticket.seatNumber); // ❌ Error: private
console.log(ticket.getSeat()); // C5


/////////////


class LibraryMember {
  public fullName: string;
  private borrowedBooks: number;

  constructor(fullName: string, borrowedBooks: number) {
    this.fullName = fullName;
    this.borrowedBooks = borrowedBooks;
  }

  borrowBook() {
    this.borrowedBooks += 1;
    console.log(`${this.fullName} borrowed a book. Total borrowed: ${this.borrowedBooks}`);
  }

  getBorrowedBooks() {
    return this.borrowedBooks;
  }
}

// Driver code
const member = new LibraryMember("Clara Lee", 2);
member.borrowBook(); // Clara Lee borrowed a book. Total borrowed: 3
console.log(member.fullName);       // Clara Lee ✅ public
// console.log(member.borrowedBooks); // ❌ Error: private
console.log(member.getBorrowedBooks()); // 3


////////////

class CoffeeOrder {
  public customerName: string;
  private cups: number;

  constructor(customerName: string, cups: number) {
    this.customerName = customerName;
    this.cups = cups;
  }

  addCup() {
    this.cups += 1;
    console.log(`${this.customerName} added a cup. Total cups: ${this.cups}`);
  }

  getCups() {
    return this.cups;
  }
}

// Driver code
const order = new CoffeeOrder("Ethan", 2);
order.addCup(); // Ethan added a cup. Total cups: 3
console.log(order.customerName);  // Ethan ✅ public
// console.log(order.cups);        // ❌ Error: private
console.log(order.getCups());    // 3