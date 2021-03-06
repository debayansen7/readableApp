import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'
// import {selectPost} from '../actions/index';

import DeleteBtn from '../components/deleteBtn';
import helperFunctions from '../utils/helperFunctions';
import RateBtns from '../components/rateBtns';
import EditButton from '../components/editButton';

class ListPosts extends Component {

    constructor(props){
    	super(props);
    	this.state = {
            posts: [],
            latestPosts: [],
            latestPostsFlag: false,
            highestScoringPosts: [],
            highestScoringPostsFlag: false,
        };
        this.onLatestPostClick = this.onLatestPostClick.bind(this);
        this.onHighestScoreClick = this.onHighestScoreClick.bind(this);
    }

    onLatestPostClick(){
        let latestPosts = this.props.posts.sort(function(a,b) {
            return (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0)
        });
        this.setState({ latestPosts, latestPostsFlag:true, highestScoringPostsFlag:false })
    };

    onHighestScoreClick(){
        let highestScoringPosts = this.props.posts.sort(function(a,b) {
            return (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore) ? -1 : 0)
        });
        this.setState({ highestScoringPosts, latestPostsFlag:false, highestScoringPostsFlag:true })
    };

    createPostList(list) {
        let setList = [];
        if(this.props.fromWhere !== 'homepage'){
          setList = list.filter((post) => post.category === this.props.categoryName)
          if(setList.length === 0){
            return (<p>Sorry No Posts yet</p>)
          }
        }else{
          setList = list
        }
        let newList = setList.map((post) => {
            let category = helperFunctions.formatCategory(post.category);
            let time = helperFunctions.formatDate(post.timestamp);
            if(!post.deleted){
                return (
                    <ListGroupItem key={post.id}>
                        <Link to={`/postDetail/${post.id}`} ><h4>{post.title}</h4></Link>
                        <p>Time: {time}, Category: {category}, Comments: {post.commentCount}</p>
                        <div>
                            Rating: <RateBtns itemID={post.id} itemType="post" voteScore={post.voteScore}/> &nbsp;
                            <EditButton bsSize='xsmall' itemID={post.id} itemType="post" />&nbsp;
                            <DeleteBtn bsSize='xsmall' item={post.id} itemType='post'/>
                        </div>
                    </ListGroupItem>
                )
            }else{
                return ''
            }
        })
        return newList;
    }

    render() {
        return (
            <div className='postList'>
                {this.props.fromWhere === 'homepage' ?
                    <h3>All Post List: </h3>
                    :
                    <h3>Posts under {helperFunctions.formatCategory(this.props.categoryName)} category:</h3>
                }
                <h4>
                    <label>Sort by:</label>&nbsp;
                    <Button onClick={this.onLatestPostClick} active={this.state.latestPostsFlag}>Latest</Button>&nbsp;
                    <Button onClick={this.onHighestScoreClick} active={this.state.highestScoringPostsFlag}>Highest Rating</Button>&nbsp;or&nbsp;
                    <Button ><Link to='/createPost'>Add New Post</Link></Button>
                </h4>
                <ListGroup>{this.createPostList(this.props.posts)}</ListGroup>
            </div>
        )
    }
};

function mapStateToProps({posts}) {
    return {posts: posts}
}

export default connect(mapStateToProps)(ListPosts);
