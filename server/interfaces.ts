// One convention for interfaces is to do I(name of interface)
// interface IUser {
interface UserInterface {
  readonly id: number;
  firstName: string;
  lastName: string;
  address?: string;
}

let orlando: UserInterface = {
  id: 1,
  firstName: 'orlando',
  lastName: 'caraballo',
  address: 'some address',
};

let natalie: UserInterface = { id: 2, firstName: 'natalie', lastName: 'lane' };

function displayUser(user: UserInterface) {
  console.log(user);
}

displayUser(orlando);

function copyAndChangeFirstName(
  firstName: string,
  user: UserInterface
): UserInterface {
  let userCopy: UserInterface = { ...user };
  userCopy.firstName = firstName;
  return userCopy;
}

let orlanda: UserInterface = copyAndChangeFirstName('orlanda', orlando);

console.log('orlando', orlando);

console.log('orlanda', orlanda);
