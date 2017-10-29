import React, {Component} from 'react';
import '../App.css';

// import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { loadComment, voteComment } from '../actions/index';

import {ListGroup, ListGroupItem, Button, ButtonGroup} from 'react-bootstrap';
import DeleteBtn from '../components/deleteBtn';
import RateBtns from '../components/rateBtns';

import Modal from 'react-modal';

class ListComments extends Component {

    constructor(props){
    	super(props);
    	this.state = {
            voteScore: '',
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
                    // let time = comment.timestamp;
                    return (
                        <ListGroupItem key={comment.id}>
                            <h5> {comment.body}</h5>
                            <div>Author: {comment.author},
                                Time: {time},
                                Rating: <RateBtns itemID={comment.id} itemType="comment" voteScore={comment.voteScore}/>
                            </div>
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

// export default ListComments;

function mapStateToProps({comments, selectedComment}) {
    return{comments, selectedComment}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadComment, voteComment}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(ListComments);
