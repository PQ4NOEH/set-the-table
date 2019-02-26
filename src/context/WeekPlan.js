import React from 'react';

import {
    Grid,
    Paper,
    Table
} from "@material-ui/core";

import withStyles from '@material-ui/core/styles/withStyles';
import MealSelector from '../components/Week/MealSelector';
import WeekPlanCtrl from "../components/Week/WeekPlan";

const styles = theme => ({
    paper:{
        padding:"2em"
    }
});

const WeekPlan = ({classes, match})=>{
    const {year, weekNumber} = match.params;
    const days = Array.from("SDLMXJV");

    return  (
        <Grid
            container 
            direction="row"
            justify="center"
        >
            <Grid item  sm={12} md={4} xl={2}>
                <Paper
                    className={classes.paper}
                >
                    <MealSelector />
                </Paper>
            </Grid>
            <Grid item xl={12}>
                <WeekPlanCtrl days={days}/>
            </Grid>
        </Grid>
    )
    
}

export default  withStyles(styles)(WeekPlan);