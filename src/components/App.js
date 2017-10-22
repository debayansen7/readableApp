import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from '../logo.svg';
import '../App.css';
import Category from './category';
import PostList from './postList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    // const url = `http://localhost:3001/categories`;
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'deb' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header ">
          <h2>Welcome to Readable App</h2>
          <ul>
            <li> + Create, Update or Delete Categories on Topics you like.</li>
            <li> + Create, Update or Delete Posts on Topics you like.</li>
            <li> + Rate, Like and Comment on the posts you like</li>
          </ul>
        </div>
        <div className='row container'>
          <div className='col-md-4'>
            <Category / >
          </div>
          <div className='col-md-8'>
            <PostList />
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Talking to the backend yields these categories: <br/>
          {this.state.backend}
        </p>
      </div>
    );
  }
}

export default App;
