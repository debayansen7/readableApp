import React from 'react';
import CategoryList from '../components/categoryList';
import ListPosts from '../components/ListPosts';

function categoryPage(props) {
  return (
    <div className='categoryPage row container'>
      <div className='col-sm-4 col-md-4 well'><CategoryList /></div>
      <div className='col-sm-8 col-md-8 well'>
        <ListPosts fromWhere="categoryPage" categoryName={props.match.params.categoryName} />
      </div>
    </div>
  )
}
export default categoryPage;
