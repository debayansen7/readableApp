import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { selectPost } from '../actions/index';

class PostList extends Component {

  createPostList(){
    let newList = this.props.posts.map((post) => {
        return (
          <ListGroupItem key={post.id}>
            <h4>{post.title} </h4>
            <p>{post.body} </p>
            <p>Author: {post.author}</p>
            <p>Category:{post.category},
              Time:{post.timestamp},
              Rating: {post.voteScore},
              Comments: {post.commentCount},
              <Button bsStyle="primary">Edit</Button><Button bsStyle="danger">Delete</Button>
            </p>
          </ListGroupItem>
        )
      })
    return newList;
  }

  render() {
    return (
      <div className='postList  well'>
        <h3>Post List</h3>
        <p>Select the Post you might like:</p>
        <ListGroup>{this.createPostList()}</ListGroup>
        <Link to='/createPost'>Add Post</Link>
      </div>
    )
  }
};

function mapStateToProps({posts}) {
  console.log(posts);
  return {
    posts: posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectPost},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
