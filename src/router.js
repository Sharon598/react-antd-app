import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home/Home';
import Test from './page/Test/Test';

const getRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/test" component={Test}/>
        </Switch>
    </Router>
);

export default getRouter;
