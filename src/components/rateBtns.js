import React,{Component} from 'react';
import {Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {votePost} from '../actions/index';

import API from '../utils/apis';
// import helperFunctions from '../utils/helperFunctions';


class RateBtns extends Component{
    constructor(props){
    	super(props);
        this.state = {
            voteScore: 0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(){
        const {voteScore, id, itemType} = this.props;
        console.log("Increment Triggered");
        console.log(this.props.voteScore, this.props.id, this.props.itemType);
        const upVote = 'upVote';
        this.setState({voteScore: voteScore+1})
        // this.props.voteScore = this.state.voteScore;
        this.voteFunction(itemType, id, upVote);
    };

    onDecrement(){
        const {voteScore, id, itemType} = this.props;
        console.log("Decrement Triggered");
        console.log(this.props.voteScore, this.props.id, this.props.itemType);
        const downVote = 'downVote';
        this.setState({voteScore: voteScore-1} )
        // this.props.voteScore = this.state.voteScore;
        this.voteFunction(itemType, id, downVote);
    };

    voteFunction(itemType, id, method){
        console.log(itemType, id, method);
        let data = {option: method}
        if(itemType === 'post'){
            API.votePost(id, data).then((data) => {
                let dataset = JSON.parse(data)
                console.log(dataset.voteScore);
                this.props.votePost(JSON.parse(data));
            })
        }else{
            API.voteComment(id, data).then((data) => {
                console.log(data);
                this.props.voteComment(data);
                // this.props.downVote(JSON.parse(data));
            })
        }
    }

    render() {
        console.log(this.props);
        // const {voteScore} = this.props;
        // const {voteScore} = this.props;
        return (
            <ButtonGroup>
                <Button bsStyle="default" bsSize="xsmall" onClick={this.onIncrement}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
                <Button bsSize="xsmall">{ this.props.voteScore }</Button>
                <Button bsStyle="default" bsSize="xsmall" onClick={this.onDecrement}><Glyphicon glyph="glyphicon glyphicon-minus" /></Button>
            </ButtonGroup>
        )
    }
}
function mapStateToProps({posts, comments}) {
    return{posts, comments}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({votePost}, dispatch)
}

// export default RateBtns;
export default connect(mapStateToProps, mapDispatchToProps)(RateBtns);
