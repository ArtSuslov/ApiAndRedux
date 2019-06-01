export const selectEvenUsers = state =>{
  const evenUsers = state.users.usersList.slice();
  return evenUsers.filter(user => !(user.id % 2));
}
export const selectName = state => {
  const tempArr = state.users.usersList.slice();
  const selectedNames = tempArr.filter(i => {
    return i.name.includes(state.users.usersName)
  });
  return selectedNames;
}
