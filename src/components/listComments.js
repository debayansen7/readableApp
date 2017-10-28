import React, {Component} from 'react';
import '../App.css';

// import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';
import {ListGroup, ListGroupItem, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import DeleteBtn from '../components/deleteBtn';
import Modal from 'react-modal';

// const customStyle={
//     content : {
//     top                   : '40px',
//     left                  : '40px',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '0px',
//     background            : 'rgb(255, 255, 255)'
//     }
// };

class ListComments extends Component {

    constructor(props){
    	super(props);
    	this.state = {
            modalOpen: false,
            closeModal: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        console.log("Triggered - openModal")
        this.setState({modalOpen:true});
    }

    closeModal(){
        console.log("Triggered - closeModal")
        this.setState({modalOpen:false});
    }

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
                                <Button bsStyle="primary" bsSize="xsmall" onClick={()=>this.openModal()}>Edit</Button>
                                <DeleteBtn item={comment.id} itemType='comment'/>
                            </ButtonGroup>
                        </ListGroupItem>
                    )

                })}
                <Modal
                    className='modalwell'
                    overlayClassName='overlay'
                    isOpen={this.state.modalOpen}
                    onRequestClose={() => {this.closeModal()}}

                    contentLabel='Modal' >
                    <div>
                        <h4 id="heading">Comment heading here</h4>
                        <p>Comment body here</p>
                    </div>
                </Modal>
            </ListGroup>
        )
    }
}

export default ListComments;
