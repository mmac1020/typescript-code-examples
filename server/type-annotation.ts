let numberArray: number[];

// numberArray = [1, 2, 3, 4, 5, '6']
// numberArray = [1, 2, 3, 4, 5, 6,]

let boolean: boolean;

// boolean = 'true'
// boolean = true

let sentence: string;

// sentence = 1234
// sentence = 'some example sentence'

class User {
  firstName: string;
  lastName: string;
  address: string;

  // Here we are manually creating the type for "user" and accepting it as a constructor input
  constructor(user: { firstName: string; lastName: string; address: string }) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
  }

  countLettersOfName(): number {
    return this.firstName.length + this.lastName.length;
  }
}

const mac = new User({
  firstName: 'michael',
  lastName: 'mac',
  address: 'some address',
});

console.log('mac', mac);

let countLetters: number;
countLetters = mac.countLettersOfName();

console.log('letters of name', countLetters);
