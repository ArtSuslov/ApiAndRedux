import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const { postsList } = this.props.posts;
    const { id } = this.props.match.params;
    const filteredPosts = postsList.filter(e => e.userId === +id);
    console.log(filteredPosts);
    return (
      <div>
        { filteredPosts.map( post => (
          <div>
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
  }

export default connect(mapStateToProps)(Posts);
