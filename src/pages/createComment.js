import React, {Component} from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {Button, FormGroup, FormControl } from 'react-bootstrap';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

import helperFunctions from '../utils/helperFunctions';
import API from '../utils/apis';

class CreateComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
                id: "",
                timestamp:"",
                body:"",
                author:"",
                parentId:"",
                voteScore: 0,
                deleted: false,
                commentCount: 0
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    redirect() {
        withRouter(({ history }) => (history.push('/')));
        console.log("Redirect triggered");
        return (
            <Redirect push to="/"/>
        )
    }

    handleChange(event) {
        let property = event.target.name;
        let value = event.target.value;
        this.setState({[property]: value});
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            parentId: this.props.match.params.postID,
            id: helperFunctions.genetateID(),
            timestamp: helperFunctions.generateTimestamp()
        }, () => {
            const {id, body, author, timestamp, parentId} = this.state;
            let newDateSet = {id, body, author, timestamp, parentId};
            API.postComment(newDateSet).then((data) => {
                console.log(data);
                this.props.addComment(JSON.parse(data));
                // this.redirect();
            });

        } );
    };

    // updateStore({history}){
    //     this.props.addPost(this.state);
    //     history.push('/');
    // };

    checkFields(){
      const {author, category, title, body} = this.state;
      return (author < 1 || body < 1 );
    };

    render() {
        // console.log(this.state);
        const {title, body, author, category} = this.state;

        return (
            <div className="createPost well">
                <h4>Create your comment:</h4>
                <form >
                    <FormGroup >
                        <FormControl componentClass="textarea" name='body' placeholder="Enter post body here" value={body}
                            onChange={this.handleChange} /><br/>

                        <FormControl type='text' name='author' value={author} placeholder='Enter author name'
                            onChange={this.handleChange} /><br/>

                    </FormGroup>

                    <Button type="submit" bsStyle="primary" onClick={this.handleSubmit} disabled={this.checkFields()}>Add Comment</Button>
                </form>
            </div>
        );
    }
};

function mapStateToProps({posts, categories, selectedPost, selectedComment}) {
    return{posts, categories, selectedPost, selectedComment}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addPost},dispatch)
};

// export default CreateComment;
export default connect(mapStateToProps,mapDispatchToProps)(CreateComment);
