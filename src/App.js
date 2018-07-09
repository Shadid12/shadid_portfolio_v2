import React from 'react';

// components
import Nav from './components/nav/Nav';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

// css
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

export default class App extends React.Component {
    render() {
        return(
            <div className='mainContainer'>
                <div className='first-hept'>
                <Router>
                    <nav className='navbar fixed-top navbar-expand-md navbar-light white double-nav scrolling-navbar'>
                        <div className='float-left'>
                            <a className='slide-out'>
                              <i className='fa fa-bars'></i>  
                            </a>
                        </div>
                        <ul className='nav navbar-nav nav-flex-icons ml-auto'>
                            <a className='btn btn-info btn-rounded btn-sm waves-effect waves-light navbar-static-login'>
                                Login
                                <i className='fa fa-sign-in ml-2'></i>
                            </a>
                        </ul>   
                    </nav>
                </Router>
                    {/* <div className='main-nav-container'>
                        <Nav />
                    </div> */}
                </div>
                <div className='second-hept'>hey</div>
                <div className='third-hept'>third hept</div>
            </div>
        )
    }
}