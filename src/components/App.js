import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { loadCategory, loadPost } from '../actions/index';
import { bindActionCreators } from 'redux'


import '../App.css';
import AppHeader from './appHeader';
import Home from './Home'
import CreatePost from './createPost'
import NoMatch from './NoMatch'
import API from '../utils/apis';

class App extends Component {

  componentDidMount() {
    API.fetchCategories().then((data) => this.props.loadCategory(data))

    API.fetchPosts().then((data) => this.props.loadPost({data}));
  }

  render() {
    return (
      <div className="App container">
        <AppHeader />

        <div className='App-body'>
          <Switch>
            <Route exact path="/" component={Home} />
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
