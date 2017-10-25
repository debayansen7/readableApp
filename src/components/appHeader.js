import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class AppHeader extends Component {

    render() {
        return (
          <div className="App-header container">
            <h2>Welcome to Readable App</h2>
            <p> + Create, Update or Delete Categories / Posts / Comments on Topics you like.</p>

            <nav className='navbar-brand'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/createPost">Create Post</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/About">About</Link>
                </li>
              </ul>
            </nav >
          </div>
        );
    }
}
