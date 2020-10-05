interface UserInterface {
  readonly id: number;
  firstName: string;
  lastName: string;
  address?: string;
}

let celine: UserInterface = {id: 1, firstName: 'celine', lastName: 'chloe', address: 'some address'};

let ben: UserInterface = {id: 2, firstName: 'ben', lastName: 'rodriguez'};

// Here we define a comparator generic interface
interface Comparator<T> {
  compare: (input1: T, input2: T) => boolean
}

let stringComparator: Comparator<string> = {
  compare: (input1: string, input2: string) => {
    return input1.length > input2.length
  }  
}

console.log('string comparator should be true: ', stringComparator.compare('this should return true because my firstString is so long', 'yep'));

let numberComparator: Comparator<number> = {
  compare: (input1: number, input2: number) => {
    return input1 > input2;
  }  
}

console.log('number comparator should be true: ', numberComparator.compare(100000, 10));

let userComparator: Comparator<UserInterface> = {
  compare: (input1: UserInterface, input2: UserInterface) => {
    return input1.firstName.length > input2.firstName.length;
  }
}

console.log('user comparator should be false: ', userComparator.compare(ben, celine));