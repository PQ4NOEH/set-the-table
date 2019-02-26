import React from 'react';

import {Redirect, Route, Switch } from 'react-router-dom';

import WeekPlan from '../context/WeekPlan';
import Recipe from '../context/Recipe';
import RecipeSearch from '../context/RecipeSearch';


const AppRoutes = ()=>{
    return <Switch>
        <Route path="/RecipeSearch" component={RecipeSearch}/>
        <Route path="/Recipe/:id" component={Recipe}/>
        <Route path="/weekPlan/:year/:weekNumber" component={WeekPlan}/>
        <Redirect to='/RecipeSearch' from="/" exact={true} navbarName= "RecipeSearch"/>
    </Switch>
}

export default AppRoutes;