import React from 'react';

import {Router, Redirect, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from "history";

import WeekPlan from '../context/WeekPlan';
import Recipe from '../context/Recipe';
import RecipeSearch from '../context/RecipeSearch';

const hist = createBrowserHistory();

const AppRoutes = ()=>{
    return <Router history={hist} locale="es">
        <Switch>
            <Route path="/RecipeSearch" component={RecipeSearch}/>
            <Route path="/Recipe/:id" component={Recipe}/>
            <Route path="/weekPlan/:year/:weekNumber" component={WeekPlan}/>
            <Redirect to='/RecipeSearch' from="/" exact={true} navbarName= "RecipeSearch"/>
        </Switch>
    </Router>
}

export default AppRoutes;