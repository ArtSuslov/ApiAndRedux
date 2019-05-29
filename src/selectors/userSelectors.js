export const selectEvenUsers = state =>
  state.users.usersList.filter(user => !(user.id % 2));
