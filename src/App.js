import React from 'react';

// components
import Hero from './components/Hero/Hero';
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
                </div>
                <div className='mid-card'>
                    <div className='card card-1'>
                       <div className='card-img-container'>
                        Shadid Haque
                       </div>
                       <div className='card-img-container'>
                            <img src='https://i.imgur.com/XyGjVux.jpg' className='my-img'/>
                       </div>
                       <div className='card-img-container'>
                            <a className='btn btn-info btn-rounded btn-sm waves-effect waves-light navbar-static-login'>
                                About Me
                            </a>
                       </div>
                       <div className='card-img-container'>
                            <a className="btn-floating btn-lg btn-li"><i className="fa fa-linkedin"></i></a>
                            <a className="btn-floating btn-lg btn-git"><i className="fa fa-github"></i></a>
                            <a className="btn-floating btn-lg btn-so"><i className="fa fa-stack-overflow"></i></a>
                       </div>
                    </div>
                </div>
                <div className='second-hept'>hey</div>
                <div className='third-hept'>third hept</div>
            </div>
        )
    }
}