import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

class Posts extends Component {
 componentDidMount () {
  this.props.getPosts();
 }

  render () {
    const { postsList } = this.props.posts;
    const { id } = this.props.match.params;
    const filteredPosts = postsList.filter(e => e.userId === +id);
    return (
      <div>
        {filteredPosts.map( post => (
          <div key={post.id}>
            <h2>Users ID - {`${id}`} title: {post.title}</h2>
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
      getPosts: () => dispatch(getPosts()),
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
