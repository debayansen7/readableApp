import React, {Component} from 'react';
import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';
import {ListGroup, ListGroupItem, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';

class ListComments extends Component {

    render() {
        // console.log(this.props);
        const {comments} = this.props;

        return (
            <ListGroup>
                {comments.map((comment) => {
                    let time = helperFunctions.formatDate(comment.timestamp);
                    return (
                        <ListGroupItem key={comment.id}>
                            <h5> {comment.body}</h5>
                            <p>Author: {comment.author}, Time: {time}, Rating:
                                <Button bsStyle="default" bsSize="xsmall" onClick={this.onIncrement}>
                                    <Glyphicon glyph="glyphicon glyphicon-plus" />
                                </Button>
                                <Button bsSize="xsmall">{comment.voteScore}</Button>
                                <Button bsStyle="default" bsSize="xsmall" onClick={this.onDecrement}>
                                    <Glyphicon glyph="glyphicon glyphicon-minus" />
                                </Button></p>
                            <ButtonGroup>
                                <Button bsStyle="primary" bsSize="xsmall" >Edit</Button>
                                <Button bsStyle="danger" bsSize="xsmall" >Delete</Button>
                            </ButtonGroup>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    }
}

export default ListComments;
