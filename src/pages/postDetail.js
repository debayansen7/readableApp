import React, {Component} from 'react';
import {Route, Redirect, Link} from 'react-router-dom';

import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { loadPost, votePost } from '../actions/index';

import CreatePost from '../pages/createPost'
import ListComments from '../components/listComments';
import DeleteBtn from '../components/deleteBtn';

class postDetail extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            post: this.props.selectedPost,
            comments: [],
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    componentDidMount() {
        const ID = this.props.match.params.postID;
        API.fetchPostByID(ID).then((data) => {
            console.log(data);
            this.props.loadPost(JSON.parse(data));
            // this.setState({post:JSON.parse(data)})
        } )
        API.fetchCommentsByPost(ID).then((data) => this.setState({comments:JSON.parse(data)}) )
    }

    voteFunction(itemType, id, method){
        // console.log(itemType, id, method);
        let data = {option: method}
        if(itemType === 'post'){
            API.votePost(id, data).then((data) => {
                // console.log(dataset.voteScore);
                this.props.votePost(JSON.parse(data));
            })
        }else{
            API.voteComment(id, data).then((data) => {
                // console.log(data);
                this.props.voteComment(data);
                // this.props.downVote(JSON.parse(data));
            })
        }
    }

    onIncrement(voteScore, id, itemType){
        // const {voteScore, id, itemType} = this.props;
        // console.log("Increment Triggered");
        // console.log(voteScore, id, itemType);
        const upVote = 'upVote';
        // this.setState({
        //     ...state,
        //     post.voteScore : voteScore+1});
        this.state.post.voteScore = voteScore+1;
        this.voteFunction(itemType, id, upVote);
    };

    onDecrement(voteScore, id, itemType){
        // const {voteScore, id, itemType} = this.props;
        // console.log("Decrement Triggered");
        // console.log(voteScore, id, itemType);
        const downVote = 'downVote';
        this.state.post.voteScore = voteScore-1;
        this.voteFunction(itemType, id, downVote);
    };

    definePost(post) {
        console.log(post);
        const category = post.category;
        // const category = helperFunctions.formatCategory(post.category);
        const time = helperFunctions.formatDate(post.timestamp);
        const {comments} = this.state;
        return (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div>Author: {post.author}, Category: {category}, Time: {time}, Rating: <ButtonGroup>
                        <Button bsStyle="default" bsSize="xsmall" onClick={() => this.onIncrement(post.voteScore, post.id, 'post')}>
                            <Glyphicon glyph="glyphicon glyphicon-plus" />
                        </Button>
                        <Button bsSize="xsmall">{ post.voteScore }</Button>
                        <Button bsStyle="default" bsSize="xsmall" onClick={() => this.onDecrement(post.voteScore, post.id, 'post')}>
                            <Glyphicon glyph="glyphicon glyphicon-minus" />
                        </Button>
                    </ButtonGroup>
                </div>
                <hr/>
                <Button bsSize="small" bsStyle="primary" onClick={() => {
                    alert("Triggered")
                    return (
                        // <Redirect push to={`/editPost/${post.id}`} />
                        <Redirect to="/" />
                    )
                }}>Edit Post</Button>&nbsp;
                <DeleteBtn item={post.id} itemType='post'/>&nbsp;
                <Link to={`${post.id}/createComment`}><Button bsSize="small" bsStyle="default"><b>Add Comments</b></Button></Link>
                <hr/>
                <h5>Comments: </h5>
                {comments.length !== 0 ? <ListComments comments={comments} /> : <p>Sorry No Comments yet</p>}
            </div>
        )
    };

    render() {
        const post = this.props.selectedPost;
        return (
            <div className='PostDetail well'>
                {post !== {} ? this.definePost(post) : <p>Sorry Cannot find post</p>}
            </div>

        );
    };
};
function mapStateToProps({posts, comments, selectedPost}) {
    return{posts, comments, selectedPost}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadPost, votePost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(postDetail);
