import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'
// import {selectPost} from '../actions/index';

import DeleteBtn from '../components/deleteBtn';
import helperFunctions from '../utils/helperFunctions';
import RateBtns from '../components/rateBtns';


class ListPosts extends Component {

    constructor(props){
    	super(props);
    	this.state = {
            posts: this.props.posts,
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
        let newList = list.map((post) => {
            let category = helperFunctions.formatCategory(post.category);
            let time = helperFunctions.formatDate(post.timestamp);
            if(!post.deleted){
                return (
                    <ListGroupItem key={post.id}>
                    <Link to={`/postDetail/${post.id}`} ><h4>{post.title}</h4></Link>
                    <p>Time: {time}, Category: {category}, Comments: {post.commentCount}</p>
                    <div>
                        Rating: <RateBtns itemID={post.id} itemType="post" voteScore={post.voteScore}/> &nbsp;
                        <ButtonGroup>
                            <Button bsSize="small" bsStyle="primary">Edit</Button>
                            <DeleteBtn item={post.id} itemType='post'/>
                        </ButtonGroup>
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
                {this.props.fromWhere === 'homepage' ?
                    <ListGroup>{this.createPostList(this.props.posts)}</ListGroup>
                    :
                    <ListGroup>{this.createPostList(this.props.categoryposts)}</ListGroup>
                }

            </div>
        )
    }
};

function mapStateToProps({posts}) {
    return {posts: posts}
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(dispatch)
//     // return bindActionCreators({selectPost}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
export default connect(mapStateToProps)(ListPosts);
