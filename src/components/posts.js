import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, sortPosts } from '../actions/postActions';
import {
   selectSortedPosts,
   selectPostsSortType,
 } from '../selectors/postSelectors';

class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
      sortBy: 'byId',
    }
  }

  componentDidMount() {
    this.props.getPosts(this.props.match.params.id);
};

  handleChange = e => {
    this.props.setSort(e.target.value);
};

  render () {
    const { sortedPosts } = this.props;
    return (
      <div>
      <select onChange={this.handleChange} value={this.props.sortBy}>
        <option value='byTitle'>By Title</option>
        <option value='byTitleReversed'>By Title reversed</option>
        <option value='byIdReversed'>By ID reversed</option>
        <option value='byId'>By ID</option>
      </select>
        {sortedPosts.map( post => (
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
      sortedPosts: selectSortedPosts(state),
      sortBy: selectPostsSortType(state),
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      getPosts: userId => dispatch(getPosts(userId)),
      setSort: sortBy => dispatch(sortPosts(sortBy))
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
