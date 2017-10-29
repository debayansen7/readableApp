import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ListGroupItem, Button, ButtonGroup} from 'react-bootstrap';

import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';
import ListPosts from '../components/ListPosts';


class categoryPage extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        API.fetchCategoryPosts(this.props.match.params.categoryName).then((posts) => {
            this.setState({posts:JSON.parse(posts)})
        })
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



    render() {
        // console.log(this.props.match.params.categoryName);

        // <h3>Posts under {helperFunctions.formatCategory(this.props.match.params.categoryName)} category:</h3>
        // <Link to='/createPost'>Add Post</Link>
        return (
            <div className="categoryPage well">

                {this.state.posts.length !== 0 ?
                    <ListPosts fromWhere="categoryPage" categoryName={this.props.match.params.categoryName} categoryposts={this.state.posts}/>
                    // <ListGroup>{this.createPostList(this.state.posts)}</ListGroup>
                     :
                    <p>Sorry No Posts yet</p>
                }
            </div>
        );
    }
}

// function mapStateToProps({posts}) {
//     return {posts: posts}
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({selectPost}, dispatch)
// }

export default categoryPage;
// export default connect(mapStateToProps, mapDispatchToProps)(categoryPage);
