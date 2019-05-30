export const selectEvenUsers = state =>{
  const evenUsers = state.users.usersList.slice();
  return evenUsers.filter(user => !(user.id % 2));
}
export const selectName = state => {
  const tempArr = state.users.usersList.slice();
  let selectedNames = [];
  for (let i = 0; i < tempArr.length; i++) {
    if(tempArr[i].name.includes(state.users.usersName))
    selectedNames.push(tempArr[i]);
  }
  return selectedNames;
}
