import React, { Component } from 'react';
import RootLayout from './component/root-layout.js'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/footer.js';
import Home from './pages/home.js';
import Auction from './pages/auction.js';
import Inventory from './pages/inventory.js';
import Mine from './pages/mine.js';

import './App.scss';
class App extends RootLayout {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <div className="app-content">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/auction' component={Auction} />
                            <Route path='/Inventory' component={Inventory} />
                            <Route path='Mine' component={Mine} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
