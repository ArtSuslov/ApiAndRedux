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
    this.state = {
      sortBy: 'byId'
    }
  }
  componentDidMount () {
  this.props.getPosts(this.props.match.params.id);
};

  handleChange = e => {
  this.setState({sortBy: e.target.value})
};

  render () {
    const {
      postsListById,
      postsListByIdReversed,
      postsListByTitle,
      postsListByTitleReversed,
    } = this.props;
    let postsList;
    switch(this.state.sortBy){
      case 'byIdReversed':
        postsList = postsListByIdReversed;
        break;
      case 'byTitleReversed':
        postsList = postsListByTitleReversed;
        break;
      case 'byTitle':
        postsList = postsListByTitle;
        break;
      default: postsList = postsListById;
    }
    return (
      <div>
      <select onChange={this.handleChange}>
        <option defaultValue='byId'>By ID</option>
        <option value='byTitle'>By Title</option>
        <option value='byTitleReversed'>By Title reversed</option>
        <option value='byIdReversed'>By ID reversed</option>
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
