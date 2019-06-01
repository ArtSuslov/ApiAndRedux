import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import {
   selectPostsById,
   selectPostsByIdReversed,
   selectPostsByTitleReversed,
   selectPostsByTitle,
 } from '../selectors/postSelectors';

class Posts extends Component {
  constructor(props){
    super(props);

    const {
      postsListById,
      postsListByIdReversed,
      postsListByTitle,
      postsListByTitleReversed,
    } = this.props;
    this.sorting = {
      byId: postsListById,
      byIdReversed: postsListByIdReversed,
      byTitle: postsListByTitle,
      byTitleReversed: postsListByTitleReversed,
    };
    console.log(this.sorting, 'sorting obj');
    this.state = {
      sortBy: 'byId',
    }
  }
  componentDidMount () {
  this.props.getPosts(this.props.match.params.id);
};

  handleChange = e => {
  this.setState({sortBy: e.target.value})
};

  render () {
    const postsList = this.sorting[this.state.sortBy];
    return (
      <div>
      <select onChange={this.handleChange} value={this.state.value}>
        <option value='byTitle'>By Title</option>
        <option value='byTitleReversed'>By Title reversed</option>
        <option value='byIdReversed'>By ID reversed</option>
        <option value='byId'>By ID</option>
      </select>
        {postsList.map( post => (
          <div key={post.id}>
            <h2>Users ID - {`${post.userId}`} title: {post.title}</h2>
            <h3>ID: {post.id}</h3>
            <p>{post.body}</p>
          </div>
        )
      )}
      </div>
    )
    }
  }

  const mapStateToProps = state => {
    return {
      postsListById: selectPostsById(state),
      postsListByIdReversed: selectPostsByIdReversed(state),
      postsListByTitle: selectPostsByTitle(state),
      postsListByTitleReversed: selectPostsByTitleReversed(state),
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      getPosts: userId => dispatch(getPosts(userId)),
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
