import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './Login';
import About from './About';
import './Routing.css';
import AddProduct from './AddProduct';
import Home from './Home'

class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                        <li>
                            <Link to="/order">Orders</Link>
                            </li>
                            
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                           
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        
                        <Route path="/order">
                            <AddProduct /> {/*  have to change */}
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    };
}

export default Routing;