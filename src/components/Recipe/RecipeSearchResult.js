import React from 'react';

import {
    Paper, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell, 
    Tooltip, 
    TableSortLabel,
    IconButton
} from '@material-ui/core';

import Create from "@material-ui/icons/Create";

const RecipeSearchResult = ({state})=>{
    const recipes = [
        {
            name: 'Crema de pescado',
            ingredients:['Langostinos', 'Calabaza', 'puerro', 'Zanahoria']
        },
        {
            name: 'Pollo asado',
            ingredients:['Pollo', 'Patatas', 'romero', 'Zanahoria']
        },
        {
            name: 'Pizza beicon',
            ingredients:['Beicon', 'Masa pizza', 'Mezcla de quesos']
        }
    ]
    return <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Tooltip
                            title="Ordenar"
                            enterDelay={300}
                        >
                            <TableSortLabel
                                active={true}
                            >
                                Nombre
                            </TableSortLabel>
                        </Tooltip>
                    </TableCell>
                    <TableCell>
                        <Tooltip
                            title="Ordenar"
                            enterDelay={300}
                        >
                            <TableSortLabel
                                active={true}
                            >
                                Ingredientes
                            </TableSortLabel>
                        </Tooltip>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    recipes.map(r=>{
                        return <TableRow key={r.id}>
                            <TableCell>
                                {r.name}
                            </TableCell>
                            <TableCell>
                                {r.ingredients.join(', ')}
                            </TableCell>
                            <TableCell>
                            <IconButton
                                    color="inherit"
                                    aria-label="Editar"
                                >
                                    <Create />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </Paper>
};

export default RecipeSearchResult;