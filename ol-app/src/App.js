import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import Navbarf from './components/Navbar';
import Home from './components/homepage/homepage.jsx';
import Products from './components/Products/Products';

const App = () => {
    return (
        <BrowserRouter basename="/OvernightLegends">
            <div className="App">
                <Navbarf></Navbarf>
                <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route exact path ="/products" component={Products} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;