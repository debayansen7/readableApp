import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import { selectCategory } from '../actions/index';
import helperFunctions from '../utils/helperFunctions';

class CategoryList extends Component {

    createList(){
        let newList = this.props.categories.map((category) => {
            let Name = helperFunctions.formatCategory(category.name);
            return (
                <ListGroupItem key={category.name}>
                    <Link to={`/categoryPage/${category.name}`}>{Name}</Link>
                </ListGroupItem>
            )
        })
        return newList;
    }

  render() {
    return (
      <div className='CategoryListContainer listSection'>
        <h3>Category List</h3>
        <p>Choose the Category you might like:</p>

        <ListGroup>{this.createList()}</ListGroup>
      </div>
    )
  }
};

function mapStateToProps({categories}) {
  return {
    categories: categories
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({selectCategory},dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
export default connect(mapStateToProps)(CategoryList);
