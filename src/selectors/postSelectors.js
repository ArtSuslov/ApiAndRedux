import { createSelector } from 'reselect';

export const selectPostsReducer = state => state.posts;

export const selectPostsList = createSelector(
  selectPostsReducer,
  reducer => reducer.postsList
);
export const selectPostsSortType = createSelector(
  selectPostsReducer,
  post => {
    return post.sortBy}
);

export const selectSortedPosts = createSelector(
  selectPostsList,
  selectPostsSortType,
  (list, sort) => {
    const selectedPosts = [...list];
    switch(sort) {

      case 'byIdReversed':
        return selectedPosts.sort((a, b) => b.id - a.id);

      case 'byTitle':
        return selectedPosts.sort((a, b) => {
          if (b.title < a.title) {return 1}
          else if(b.title > a.title) {return -1};
          return 0;
        });

      case 'byTitleReversed':
        return selectedPosts.sort((a, b) => {
          if(b.title > a.title) {return 1}
          else if(b.title < a.title) {return -1};
          return 0;
        })

      default:
        return selectedPosts.sort((a, b) => a.id - b.id);
    }
  }
);
