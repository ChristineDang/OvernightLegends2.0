import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import Navbarf from './components/Navbar';
import Home from './components/homepage/homepage.jsx';
import Footer from './components/footer';
// import Badges from './components/Products/badges';
// import Emotes from './components/Products/emotes';

import Shop from './components/index.js';

const App = () => {
    return (
        <BrowserRouter baseName="/OvernightLegends">
            <div className="App">
                <Navbarf></Navbarf>
                <Switch>
                    <Route exact path ="/" component={Home} />
                    {/* <Route exact path ="/badges" component={Badges} />
                    <Route exact path ="/emotes" component={Emotes} /> */}
                    <Route exact path ="/shop" component={Shop} />
                </Switch>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
};

export default App;