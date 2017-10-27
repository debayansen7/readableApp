import React from 'react'
import CategoryList from '../components/categoryList';
import ListPosts from '../components/ListPosts';

export default function App() {
    return (
      <div className='row container'>
        <div className='col-sm-4 col-md-4 well'><CategoryList /></div>
        <div className='col-sm-8 col-md-8 well'><ListPosts fromWhere='homepage'/></div>
      </div>
    )
}
