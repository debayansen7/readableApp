import React, {Component} from 'react';
// import { Link} from 'react-router-dom';
import {Button, FormGroup, FormControl } from 'react-bootstrap';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loadPost, editPost } from '../actions/index';

import helperFunctions from '../utils/helperFunctions';
import API from '../utils/apis';

class EditPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            author: '',
            category: '',
            timestamp: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        const ID = this.props.match.params.postID;
        API.fetchPostByID(ID).then((data) => {
            // console.log(data);
            this.props.loadPost(JSON.parse(data));
            this.setState({
                id: this.props.selectedPost.id,
                title:  this.props.selectedPost.title,
                body:  this.props.selectedPost.body,
                author:  this.props.selectedPost.author,
                category:  this.props.selectedPost.category,
            })
        });
    };

    handleChange(event) {
        let property = event.target.name;
        let value = event.target.value;
        // console.log(property, value);
        this.setState({[property]: value});
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            timestamp: helperFunctions.generateTimestamp()
            }, () => {
                const {id, title, author, body, timestamp, category} = this.state;
                let newDateSet = { title, author, body, timestamp, category};
                // console.log(id, newDateSet);
                API.editPost(id, newDateSet).then((data) => {
                    // console.log(data);
                    this.props.editPost(JSON.parse(data));
                });
        });
    };

    checkFields(){
      const {title, body} = this.state;
      return ( title < 1 || body < 1 );
    };

    render() {
        // console.log(this.state);
        // const {title, body, author, category} = this.props.selectedPost;
        const {title, body, author, category} = this.state;
        return (
            <div className="createPost well">
                <h4>Edit the post: </h4>
                <form >
                    <FormGroup >
                        <FormControl type='text' name='title' value={title || ''}
                            onChange={this.handleChange} /><br/>

                        <FormControl componentClass="textarea" name='body' value={body || ''}
                            onChange={this.handleChange} /><br/>

                        <FormControl type='text' name='author' value={author || ''} placeholder='Enter author name'
                            onChange={this.handleChange} /><br/>

                        <FormControl componentClass="select"  name='category' value={category || 'select'} onChange={this.handleChange}>
                            <option value="select" disabled>select</option>
                            {this.props.categories.map((i) => <option key={i.name} >{i.name}</option> )}
                        </FormControl>
                    </FormGroup>
                    <Button type="submit" bsStyle="primary" onClick={this.handleSubmit} disabled={this.checkFields()}>Edit Post</Button>
                </form>
            </div>
        );
    }
};
function mapStateToProps({categories, posts, comments, selectedPost}) {
    return{categories, posts, comments, selectedPost}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadPost, editPost},dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(EditPost);
