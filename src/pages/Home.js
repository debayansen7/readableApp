import React from 'react'
import CategoryList from '../components/categoryList';
import PostList from '../components/postList';

export default function App() {
    return (
      <div className='row container'>
        <div className='col-sm-4 col-md-4'><CategoryList / ></div>
        <div className='col-sm-8 col-md-8'><PostList /></div>
      </div>
    )
}
