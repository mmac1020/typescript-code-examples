// User action types without enums. We'd have to look at these individually and figure out which one we want to use
const GET_USERS = 'GET_USERS';
const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';
const GET_SINGLE_USER = 'GET_SINGLE_USER';

// The Enum way
enum UsersActions {
  GET = 'GET_USERS',
  SET = 'SET_USERS',
}

enum UserActions {
  ADD = 'ADD_USER',
  GET = 'GET_SINGLE_USER',
}

// And we can use these across our apps as

UsersActions.GET;

UserActions.ADD;
