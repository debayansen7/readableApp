import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

export default class DeleteBtn extends Component {

    removeItem(){
        console.log("Item being deleted:", this.props.item);
    }

    render() {
        return (
            <Button bsSize="small" bsStyle="danger" onClick={() => this.removeItem()}>Delete</Button>
        );
    }
}
