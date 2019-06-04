import { createSelector } from 'reselect';

export const selectUsersReducer = state => state.users;

export const selectUsersList = createSelector(
  selectUsersReducer,
  reducer => reducer.usersList
);

export const selectUsersName = createSelector(
  selectUsersReducer,
  reducer => reducer.usersName
);

export const selectEvenUsers = createSelector(
  selectUsersList,
  users => users.filter(user => !(user.id % 2))
);

export const selectName = createSelector(
  selectUsersList,
  selectUsersName,
  (users, name) => users.filter(user => user.name.includes(name))
);
