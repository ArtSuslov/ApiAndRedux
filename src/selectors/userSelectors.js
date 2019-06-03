import { createSelector } from 'reselect';

export const selectEvenUsers = createSelector(
  state => state.users.usersList,
  users => users.filter(user => !(user.id % 2))
);
/*export const selectEvenUsers = state =>{
  const evenUsers = state.users.usersList.slice();
  return evenUsers.filter(user => !(user.id % 2));
} */
export const selectName = createSelector(
  state => state.users.usersList,
  state => state.users.usersName,
  (users, name) => users.filter(user => user.name.includes(name)),
)
/*
export const selectName = state => {
  const tempArr = state.users.usersList.slice();
  const selectedNames = tempArr.filter(i => {
    return i.name.includes(state.users.usersName)
  });
  return selectedNames;
}
*/
