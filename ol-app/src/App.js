import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/homepage/homepage.jsx';
import Products from './components/Products/Products';

const App = () => {
    return (
        // <div>
        //     <Products />
        // </div>

        <Router>
            <div>
                <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route exact path ="/products" component={Products} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;