import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { 
    Paper, 
    TextField, 
    Grid
    
} from '@material-ui/core';

import PaperSection from '../Uicontrols/PaperSection';
import SaveButton from '../Uicontrols/SaveButton';
import CancelButton from '../Uicontrols/CancelButton';
import FormOptions from '../Uicontrols/FormOptions';

import RecipeIngredientInput from './RecipeIngredientInput';
import RecipeIngredients from './RecipeIngredients';
import RecipeStepInput from "./RecipeStepInput";
import RecipeSteps from "./RecipeSteps";


const styles = theme => ({
    paper:{
        padding:"2em"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    measureSelect:{
        marginTop: "1em",
        marginLeft: "0.5em"
    }
})

const RecipeEditor = ({classes})=>{
    return  <Grid
            container 
            lg={12}
            direction="row"
            justify="center"
        >
            <Grid item  sm={12} md={6} xl={4}>
            <Paper
                className={classes.paper}
            >
                <form>
                    <TextField
                        required
                        id="name"
                        label="Nombre"
                        margin="normal"
                        fullWidth
                    />
                    <PaperSection sectionName="Ingredientes" >    
                        <RecipeIngredientInput addIngredient={()=>{}}/>
                        <RecipeIngredients />
                    </PaperSection>

                    <PaperSection sectionName="Pasos" root={{marginTop: "2em"}}>    
                        <RecipeStepInput onClick={()=>{}}/>
                        <RecipeSteps />
                    </PaperSection>
                    <FormOptions>
                        <CancelButton onClick={()=>{}}/>
                        <SaveButton onClick={()=>{}}/>
                    </FormOptions>
                </form>
            </Paper>
        </Grid>    
    </Grid>
}


export default withStyles(styles)(RecipeEditor);