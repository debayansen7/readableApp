import React, { Component } from 'react'
import CategoryList from './categoryList';
import PostList from './postList';

export default class App extends Component {
  render() {
    return (
      <div className='row container'>
        <div className='col-sm-4 col-md-4'>
          <CategoryList / >
        </div>
        <div className='col-sm-8 col-md-8'>
          <PostList />
        </div>
      </div>
    )
  }
}
