import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

class Posts extends Component {
 componentDidMount () {
  this.props.getPosts(this.props.match.params.id);
 }

  render () {
    const { postsList } = this.props.posts;
    return (
      <div>
        {postsList.map( post => (
          <div key={post.id}>
            <h2>Users ID - {`${post.userId}`} title: {post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      )}
      </div>
    )
    }
  }

  const mapStateToProps = store => {
    return {
      posts: store.posts,
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      getPosts: userId => dispatch(getPosts(userId)),
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
