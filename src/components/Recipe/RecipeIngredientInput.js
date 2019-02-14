import React,{Component} from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/Add';

import { 
    TextField,
    FormGroup,
    IconButton
    
} from '@material-ui/core';

const styles = theme => ({
    measureSelect:{
        marginTop: "1em",
        marginLeft: "0.5em"
    },
    button: {
        margin: theme.spacing.unit,
      },
})

class RecipeIngredientInput extends Component {
    render(){
        const {classes} = this.props;
        return  <FormGroup
                    row={true}
                >
            <TextField
                required
                id="ingredient-name"
                label="Ingrediente"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="ingredient-qt"
                label="Cantidad"
                type="number"
                margin="normal"
            />
            
            <TextField
                id= "ingredient-qt-measure"
                select
                label="Medida"
                SelectProps={{
                    native: true,
                    MenuProps: {
                    className: classes.menu,
                    }
                }}
                className={classes.measureSelect}
            >
                <option key={-1} value={-1}></option>
                <option key={1} value={1}>ud</option>
                <option key={2} value={2}>gr</option>
                <option key={3} value={3}>lt</option>
            </TextField>
            <IconButton className={classes.button} aria-label="Delete">
                <AddIcon />
            </IconButton>
        </FormGroup >
    }
}


export default withStyles(styles)(RecipeIngredientInput);