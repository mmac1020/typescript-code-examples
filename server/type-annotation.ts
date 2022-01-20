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
  constructor(firstName: string, lastName: string, address: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  // the parameters are allowed to be either a string or a number.
  // The colon after the function parenthesis denotes the type returned
  countLettersOfName(name: string | number[]): number {
    return this.firstName.length + this.lastName.length;
  }

  logsOutMyName(): void {
    console.log(this.firstName);
  }
}

const mac = new User('michael', 'mac', 'some address');

console.log('mac', mac);

let countLetters: number;
countLetters = mac.countLettersOfName("mac");
countLetters = mac.countLettersOfName([1,2,3,4,5]);
mac.logsOutMyName();

console.log('letters of name', countLetters);
