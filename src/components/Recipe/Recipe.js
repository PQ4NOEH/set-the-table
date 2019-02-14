import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { 
    Paper, 
    TextField, 
    FormControl, 
    Typography,
    Grid
    
} from '@material-ui/core';

import RecipeIngredientInput from './RecipeIngredientInput';
import RecipeIngredients from './RecipeIngredients';

const styles = theme => ({
    paper:{
        padding:"2em"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    measureSelect:{
        marginTop: "1em",
        marginLeft: "0.5em"
    }
})

const RecipeEditor = ({classes})=>{
    return  <Paper
                className={classes.paper}
            >
        <Grid
            container 
            lg={12}
            direction="row"
            justify="center"
        >
            <Grid item  sm={12} md={6} xl={4}>
                <form>
                    <FormControl>
                        <TextField
                            required
                            id="name"
                            label="Nombre"
                            className={classes.textField}
                            margin="normal"
                        />
                    </FormControl>
                    <RecipeIngredientInput addIngredient={()=>{}}/>
                    <RecipeIngredients />
                </form>
                </Grid>    
            </Grid>
    </Paper>
}


export default withStyles(styles)(RecipeEditor);