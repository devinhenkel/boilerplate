import React from 'react';
import { Switch, Link, NavLink, BrowserRouter, Route } from 'react-router-dom'
import Home from '../components/Home';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/portfolio/:id?" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;