let sentence: string;

// sentence = 1234
// sentence = 'some example sentence'

let numberArray: (number | string)[];

numberArray = [1, 2, 3, 4, 5, '6'];
// numberArray = [1, 2, 3, 4, 5, 6,]

let boolean: boolean;

// boolean = 'true'
// boolean = true

class User {
  firstName: string;
  lastName: string;
  address: any;

  // Here we are manually creating the type for "user" and accepting it as a constructor input
  // constructor(user) {
  constructor(user: { firstName: string; lastName: string; address: any }) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
  }
  // constructor(firstName, lastName, address)
  // constructor(firstName: string, lastName: string, address: any)

  countLettersOfName(): number {
    return this.firstName.length + this.lastName.length;
  }
}

const anotherMac = {
  firstName: 'michael',
  lastName: 'mac',
  address: 123,
};

const anotherMacUser = new User(anotherMac);

const mac = new User({
  firstName: 'michael',
  lastName: 'mac',
  address: 123,
  anotherField: true,
});

console.log('mac', mac);

let countLetters: number;
countLetters = mac.countLettersOfName();

console.log('letters of name', countLetters);
