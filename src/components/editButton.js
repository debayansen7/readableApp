import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function EditButton (props) {
    return (
        <Button bsSize={props.bsSize} bsStyle="default" >
        {props.itemType === 'post' ?
            <Link to={`/editPost/${props.itemID}`}>
                <b>Edit Post</b>
            </Link>
            :
            <Link to={`/editComment/${props.itemID}`}>
                <b>Edit Post</b>
            </Link>
        }
        </Button>
    );
};
