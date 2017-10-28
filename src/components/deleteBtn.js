import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/apis';
// import helperFunctions from '../utils/helperFunctions';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {deletePost, deleteComment} from '../actions/index';

class DeleteBtn extends Component {

    removeItem(item, itemType){
        if(itemType === 'post'){
            console.log(item, itemType);
            API.deletePost(item).then((data) => {
                console.log(data);
                this.props.deletePost(data);
            })
        }else{
            console.log(item, itemType);
            API.deleteComment(item).then((data) => {
                console.log(data);
                this.props.deleteComment(data);
            })
        }
    }

    render() {
        let btnSize = 'small';
        if(this.props.itemType === 'comment'){
            btnSize = 'xsmall';
        }
        return (
            <Button bsSize={btnSize} bsStyle="danger" onClick={() => this.removeItem(this.props.item, this.props.itemType)}>Delete</Button>
        );
    }
}

function mapStateToProps(state) {return state}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deletePost, deleteComment}, dispatch)
}

// export default connect(mapDispatchToProps)(DeleteBtn);
export default connect(mapStateToProps, mapDispatchToProps)(DeleteBtn);
