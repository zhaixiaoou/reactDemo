import React, {PureComponent} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routers from './router.js';


export default class RouteConfig extends PureComponent {

    routeWithSubRoutes(key, route) {
        return(
            <Route
                key={key}
                path={route.path}
                exect ={route.exect}
                render={props => (
                    <route.component {...props} routes={route.routes}/>
                )}
            />
        );
    }
    render(){
        return(
            <Router>
                <div  className="app-container">
                    <Switch>
                    {routers.map((route, i) => this.routeWithSubRoutes(i, route))}
                    </Switch>
                </div>
            </Router>
        );
    }
}