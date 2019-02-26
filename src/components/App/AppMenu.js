import React from 'react';
import { IconButton, Toolbar } from "@material-ui/core";
import FastFood from "@material-ui/icons/Fastfood";
import DateRange from "@material-ui/icons/DateRange";
import { withRouter } from "react-router";
import moment from 'moment';

class AppMenu extends React.Component{
  onRecipeSearchClick = ()=> this.props.history.push('/RecipeSearch');
  onWeekPlanClick = ()=> {
    const now = moment();
    const year = now.format('Y');
    const week = now.format('W')
    this.props.history.push(`/weekplan/${year}/${week}`);
  }
  render(){
    return <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.onRecipeSearchClick}
          >
            <FastFood />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.onWeekPlanClick}
          >
            <DateRange />
          </IconButton>
    </Toolbar>
  }
}


export default withRouter(AppMenu);