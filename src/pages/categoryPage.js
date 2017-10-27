import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ListGroup, ListGroupItem, Button, ButtonGroup} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {selectPost} from '../actions/index';
import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';

class categoryPage extends Component {

    state = {
        posts: []
    }

    createPostList(posts) {
        // console.log(this.state);
        let newList = posts.map((post) => {
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

    componentDidMount() {
        API.fetchCategoryPosts(this.props.match.params.categoryName).then((posts) => {
            this.setState({posts:JSON.parse(posts)})
        })
    }

    render() {
        console.log(this.props.match.params.categoryName);

        return (
            <div className="categoryPage well">
                <h3>Posts under this categroy</h3>
                {this.state.posts.length !== 0 ?
                    <ListGroup>{this.createPostList(this.state.posts)}</ListGroup> : <p>Sorry No Posts yet</p>
                }
                <Link to='/createPost'>Add Post</Link>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts: posts}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(categoryPage);