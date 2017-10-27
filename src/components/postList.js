import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ListGroup, ListGroupItem, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {selectPost} from '../actions/index';
import helperFunctions from '../utils/helperFunctions';

class PostList extends Component {

    createPostList() {
        let newList = this.props.posts.map((post) => {
            // let category = helperFunctions.formatCategory(post.category);
            let time = helperFunctions.formatDate(post.timestamp);
            return (
                <ListGroupItem key={post.id}>
                    <Link to={`/postDetail/${post.id}`} ><h4>{post.title}</h4></Link>
                    <p>Time: {time}, Rating: {post.voteScore}, Comments: {post.commentCount}</p>
                    <ButtonGroup>
                        <Button bsSize="small" bsStyle="primary">Edit</Button>
                        <Button bsSize="small" bsStyle="danger">Delete</Button>
                    </ButtonGroup>
                </ListGroupItem>
            )
        })
        return newList;
    }

    render() {
        return (
            <div className='postList  well'>
                <h3>Post List: </h3>
                <p>Select the Post that you might like:</p>
                <ButtonToolbar>
                    <Button >Latest</Button>
                    <Button>Highest Rating</Button>
                    <Button><Link to='/createPost'>Add Post</Link></Button>
                </ButtonToolbar>
                <ListGroup>{this.createPostList()}</ListGroup>

            </div>
        )
    }
};

function mapStateToProps({posts}) {
    return {posts: posts}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
