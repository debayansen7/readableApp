import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';

class CategoryList extends Component {


  createList(){
    let newList = this.props.categories.map((category) => {
        return (
          <ListGroupItem key={category.name} onClick={() => this.props.selectCategory(category)}>{category.name}</ListGroupItem>
        )
      })
    return newList;
  }

  render() {
    return (
      <div className='CategoryListContainer listSection well'>
        <h3>Category List</h3>
        <p>Choose the Category you might like:</p>
        <ListGroup>
          {this.createList()}
        </ListGroup>
      </div>
    )
  }
};

function mapStateToProps({categories}) {
  return {
    categories: categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectCategory},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
