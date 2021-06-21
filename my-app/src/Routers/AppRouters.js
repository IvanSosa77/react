import React from 'react'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/carro.png'


import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'


function AppRouters() {

    return (
        <Router>
            <NavBar image={image}/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/:id" component={Products}></Route>
            <Route path="*"> Page not found, please click in Home</Route>
            </Switch>
        </Router>
    )
}

export default AppRouters
