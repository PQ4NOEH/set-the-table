import React,{Component} from 'react';

import DeleteIcon from '@material-ui/icons/Delete';

import { 
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
    
} from '@material-ui/core';


class RecipeIngredients extends Component {
    render(){
        const ingredients = [
            {
                id:1,
                name:"Queso",
                quantity: "125",
                measure: "gr",
                measureId: 1
            },
            {
                id:2,
                name:"Leche entera",
                quantity: "50",
                measure: "ml",
                measureId: 2
            }
        ]
        return  <List >
        {
            ingredients.map(i=> {
            return <ListItem>
                <ListItemText
                    primary={`${i.name} ${i.quantity} ${i.measure}`}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Eliminar">
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            })
        }
    </List>
    }
}


export default RecipeIngredients;