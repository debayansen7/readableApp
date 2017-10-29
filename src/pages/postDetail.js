import React, {Component} from 'react';
import { Redirect, Link} from 'react-router-dom';

import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';
import {Button} from 'react-bootstrap';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { loadPost, votePost, loadAllComment } from '../actions/index';

// import CreatePost from '../pages/createPost'
import ListComments from '../components/listComments';
import DeleteBtn from '../components/deleteBtn';
import RateBtns from '../components/rateBtns';

class postDetail extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            post: this.props.selectedPost,
            comments: [],
            latestCommetnFlag: false,
            highestScoringCommentFlag: false,
        };
        // this.onIncrement = this.onIncrement.bind(this);
        // this.onDecrement = this.onDecrement.bind(this);
    }

    componentDidMount() {
        const ID = this.props.match.params.postID;
        API.fetchPostByID(ID).then((data) => {
            // console.log(data);
            this.props.loadPost(JSON.parse(data));
            // this.setState({post:JSON.parse(data)})
        } )
        API.fetchCommentsByPost(ID).then((data) => {
            // console.log(data);
            this.props.loadAllComment(JSON.parse(data));
            this.setState({comments:this.props.comments});
        } )
    }

    definePost(post) {
        // console.log(post);
        // const category = post.category;
        const category = helperFunctions.formatCategory(post.category);
        const time = helperFunctions.formatDate(post.timestamp);
        // const {comments} = this.state;
        return (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div>Author: {post.author}, Category: {category}</div>
                <div>Time: {time}, Rating: <RateBtns itemID={post.id} itemType="post" voteScore={post.voteScore}/></div>
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
            </div>
        )
    };

    render() {
        const post = this.props.selectedPost;
        // const {comments} = this.props;
        const comments = this.props.comments.sort(function(a,b) {
            return (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore) ? -1 : 0)
        });
        return (
            <div className='PostDetail well'>
                {post !== {} ? this.definePost(post) : <p>Sorry Cannot find post</p>}
                <hr/>
                <h5>Comments: </h5>
                {comments === [] ? <p>Sorry No Comments yet</p> :
                    <ListComments comments={comments} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
                }
            </div>
        );
    };
};

function mapStateToProps({posts, comments, selectedPost}) {
    return{posts, comments, selectedPost}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadPost, votePost, loadAllComment}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(postDetail);
