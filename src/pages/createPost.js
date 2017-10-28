import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {Button, FormGroup, FormControl } from 'react-bootstrap';
// import { Route } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {addPost} from '../actions/index';

import helperFunctions from '../utils/helperFunctions';
import API from '../utils/apis';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
                id: "",
                timestamp:"",
                title:"",
                body:"",
                author:"",
                category:"",
                voteScore: 0,
                deleted: false,
                commentCount: 0
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    redirect(){
        console.log("Redirect triggered");
        return (
            <Redirect to="/"/>
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
            id: helperFunctions.genetateID(),
            timestamp: helperFunctions.generateTimestamp()
        }, () => {
            const {id, title, author, body, timestamp, category} = this.state;
            let newDateSet = {id, title, author, body, timestamp, category};
            API.postingPost(newDateSet).then((data) => {
                console.log(data);
                this.props.addPost(JSON.parse(data));
                this.redirect();
            });

        } );
    };

    updateStore({history}){
        this.props.addPost(this.state);
        history.push('/');
    };

    checkFields(){
      const {author, category, title, body} = this.state;
      return (author < 1 || title < 1 || body < 1 || category === 'select');
    };

    render() {
        // console.log(this.state);
        const {title, body, author, category} = this.state;

        return (
            <div className="createPost well">
                <form >
                    <FormGroup >
                        <FormControl type='text' name='title' value={title} placeholder='Enter title here'
                            onChange={this.handleChange} /><br/>

                        <FormControl componentClass="textarea" name='body' placeholder="Enter post body here" value={body}
                            onChange={this.handleChange} /><br/>

                        <FormControl type='text' name='author' value={author} placeholder='Enter author name'
                            onChange={this.handleChange} /><br/>

                        <FormControl componentClass="select"  name='category' value={category} onChange={this.handleChange}>
                            <option value="select" disabled>select</option>
                            {this.props.categories.map((i) => <option key={i.name} >{i.name}</option> )}
                        </FormControl>
                    </FormGroup>

                    <Button type="submit" bsStyle="primary" onClick={this.handleSubmit} disabled={this.checkFields()}>Add Post</Button>
                </form>
            </div>
        );
    }
};

function mapStateToProps({posts, categories}) {
    return{posts, categories}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addPost},dispatch)
};

// export default CreatePost;
export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);
