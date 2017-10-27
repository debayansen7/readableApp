import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { loadCategory, loadPost } from '../actions/index';
import { bindActionCreators } from 'redux'

import AppHeader from './appHeader';
import Home from '../pages/Home'
import categoryPage from '../pages/categoryPage'
import CreatePost from '../pages/createPost'
import postDetail from '../pages/postDetail'
import NoMatch from '../pages/NoMatch'
import '../App.css';
import API from '../utils/apis';
import helperFunctions from '../utils/helperFunctions';

class App extends Component {

  componentDidMount() {
    API.fetchCategories().then((data) => {
        this.props.loadCategory(helperFunctions.objectFromArray(data))
    })
    API.fetchPosts().then((data) => this.props.loadPost({data}));
  }

  render() {
    return (
      <div className="App container">
        <AppHeader />

        <div className='App-body'>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/categoryPage/:categoryName" component={categoryPage} />
            <Route exact path="/postDetail/:postID" component={postDetail} />
            <Route exact path="/createPost" component={CreatePost} />
            <Route exact path="/editPost/:postID" component={CreatePost} />
            <Route exact path="/createPost" component={CreatePost} />
            <Route component={NoMatch}/>
          </Switch>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadCategory,
    loadPost
  },dispatch)
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(App));
