import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/" exact  component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;