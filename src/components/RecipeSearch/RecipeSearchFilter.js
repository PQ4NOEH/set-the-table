import React from 'react';

import { Paper, TextField } from '@material-ui/core'

const RecipeSearchFilter = ({filter, onFilterChange})=>{
    return <Paper className>
        <form className noValidate autoComplete="off">
            <TextField
            id="filtro"
            style={{ margin: 8 }}
            placeholder="Introduce aqui tu busqueda"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </form>
    </Paper>
}


export default RecipeSearchFilter;