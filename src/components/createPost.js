import React,{Component} from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export default class CreatePost extends Component {

    render() {
        return (
            <div className="createPost">

              <Form>
              <FormGroup >
                <ControlLabel>Title: </ControlLabel>
                <FormControl type='text' /><br/>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Post: </ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" /><br/>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Author: </ControlLabel>
                <FormControl type='text' /><br/>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Category: </ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>

                <Button>Add Post</Button>
              </Form>

            </div>
        );
    }
};
