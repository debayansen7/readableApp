import React,{Component} from 'react';
import {Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { loadComment, votePost, voteComment } from '../actions/index';

import API from '../utils/apis';

class RateBtns extends Component{
    constructor(props){
    	super(props);
        this.state = {
            voteScore: '',
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    };

    onIncrement(){
        const {itemID, itemType} = this.props;
        const upVote = 'upVote';
        this.voteFunction(itemType, itemID, upVote);
    };

    onDecrement(){
        const {itemID, itemType} = this.props;
        const downVote = 'downVote';
        this.voteFunction(itemType, itemID, downVote);
    };

    voteFunction(itemType, id, method){
        // console.log(itemType, id, method);
        let data = {option: method}
        if(itemType === 'post'){
            API.votePost(id, data).then((data) => {
                this.props.votePost(JSON.parse(data));
            })
        }else{
            API.voteComment(id, data).then((data) => {
                this.props.voteComment(JSON.parse(data));
            })
        }
    }

    render() {
        return (
            <ButtonGroup>
                <Button bsStyle="default" bsSize="xsmall" onClick={this.onIncrement}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>

                    <Button bsSize="xsmall">{ this.props.voteScore }</Button>

                <Button bsStyle="default" bsSize="xsmall" onClick={this.onDecrement}><Glyphicon glyph="glyphicon glyphicon-minus" /></Button>
            </ButtonGroup>
        )
    }
}

function mapStateToProps({selectedPost, selectedComment}) {
    return{selectedPost, selectedComment}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadComment, votePost, voteComment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RateBtns);
