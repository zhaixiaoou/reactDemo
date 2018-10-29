import React, { Component } from 'react';
import RootLayout from './component/root-layout.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/footer.js';
import Home from './pages/home.js';
import Auction from './pages/auction.js';
import Inventory from './pages/inventory.js';
import Mine from './pages/mine.js';

import './App.scss';
class App extends RootLayout {
    render() {
        return (
            <div className="app-container">
                <div className="app-content">
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route path='/home/auction' component={Auction} />
                        <Route path='/home/inventory' component={Inventory} />
                        <Route path='/home/mine' component={Mine} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
