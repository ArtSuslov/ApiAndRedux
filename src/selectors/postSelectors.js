export const selectPostsById = state => {
  const sortedArr = state.posts.postsList.slice();
  return sortedArr.sort((a, b) => a.id - b.id);
};
export const selectPostsByIdReversed = state => {
  const sortedArr = state.posts.postsList.slice();
  return sortedArr.sort((a, b) => b.id - a.id);
};
export const selectPostsByTitle = state => {
  const sortedArr = state.posts.postsList.slice();
  sortedArr.sort((a, b) => {
    if(b.title < a.title) {return 1}
    else if(b.title > a.title) {return -1};
    return 0;
  });
  return sortedArr;
};
export const selectPostsByTitleReversed = state => {
  const sortedArr = state.posts.postsList.slice();
  sortedArr.sort((a, b) => {
    if(b.title > a.title) {return 1}
    else if(b.title < a.title) {return -1};
    return 0;
  });
  return sortedArr;
};
