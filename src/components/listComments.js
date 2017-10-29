import React, {Component} from 'react';
// import { Link} from 'react-router-dom';
import '../App.css';

// import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { loadComment, voteComment } from '../actions/index';

import {ListGroup, ListGroupItem } from 'react-bootstrap';
import DeleteBtn from '../components/deleteBtn';
import RateBtns from '../components/rateBtns';
import EditButton from '../components/editButton';

class ListComments extends Component {

    constructor(props){
    	super(props);
    	this.state = {
            voteScore: '',
        };
    }

    render() {
        // console.log(this.props);
        const {comments} = this.props;

        return (
            <ListGroup>
                {comments.map((comment) => {
                    let time = helperFunctions.formatDate(comment.timestamp);
                    // let time = comment.timestamp;
                    return (
                        <ListGroupItem key={comment.id}>
                            <h5> {comment.body}</h5>
                            <p>Author: {comment.author}, Time: {time}</p>
                            <div>
                                Rating: <RateBtns itemID={comment.id} itemType="comment" voteScore={comment.voteScore}/> &nbsp;
                                <EditButton bsSize='xsmall' itemID={comment.id} itemType='comment' />&nbsp;
                                <DeleteBtn bsSize='xsmall' item={comment.id} itemType='comment'/>
                            </div>
                        </ListGroupItem>
                    )

                })}
            </ListGroup>
        )
    }
}

// export default ListComments;

function mapStateToProps({comments, selectedComment}) {
    return{comments, selectedComment}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadComment, voteComment}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(ListComments);
