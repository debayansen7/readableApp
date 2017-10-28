import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';
import {Button, Glyphicon} from 'react-bootstrap';
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux';
// import {selectPost} from '../actions/index';

import ListComments from '../components/listComments';
import DeleteBtn from '../components/deleteBtn';

class postDetail extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            post: {},
            comments: [],
        };
    }

    componentDidMount() {
        const ID = this.props.match.params.postID;
        API.fetchPostByID(ID).then((data) => this.setState({post:JSON.parse(data)}) )
        API.fetchCommentsByPost(ID).then((data) => this.setState({comments:JSON.parse(data)}) )
    }

    onIncrement(){
        this.setState({
            voteScore: this.state.post.voteScore+1
        })
    };

    onDecrement(){
        this.setState({
            voteScore: this.state.post.voteScore-1
        })
    };

    definePost(post) {
        const category = post.category;
        // const category = helperFunctions.formatCategory(post.category);
        const time = helperFunctions.formatDate(post.timestamp);
        const {comments} = this.state;
        return (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <p>Author: {post.author}, Category: {category}</p>
                <p>Time: {time},
                Rating:
                    <Button bsStyle="default" bsSize="xsmall" onClick={this.onIncrement}>
                        <Glyphicon glyph="glyphicon glyphicon-plus" />
                    </Button>
                    <Button bsSize="xsmall">{post.voteScore || 0}</Button>
                    <Button bsStyle="default" bsSize="xsmall" onClick={this.onDecrement}>
                        <Glyphicon glyph="glyphicon glyphicon-minus" />
                    </Button>
                </p>
                <h5>Comments: </h5>
                {comments.length !== 0 ? <ListComments comments={this.state.comments} /> : <p>Sorry No Comments yet</p>
                }
                <hr/>
                <Button bsSize="small" bsStyle="default"><Link to='/createComment'>Add Comments</Link></Button>&nbsp;
                <Button bsSize="small" bsStyle="primary">Edit Post</Button>&nbsp;
                <DeleteBtn item={post.id} itemType='post'/>
            </div>
        )
    };
    render() {
        const {post} = this.state;
        return (
            <div className='PostDetail well'>
                {post !== {} ? this.definePost(post) : <p>Sorry Cannot find post</p>}
            </div>

        );
    };
};

export default postDetail;
