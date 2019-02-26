import React from "react";

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
} from "@material-ui/core";

import Create from "@material-ui/icons/Create";

class RecipeRecord extends React.Component {
  _handleEditClick = () => this.props.onEditRecipeClick(this.props.recipe);
  render() {
    const { recipe } = this.props;
    return (
      <TableRow key={recipe.id}>
        <TableCell>{recipe.name}</TableCell>
        <TableCell>{recipe.ingredients.join(", ")}</TableCell>
        <TableCell>
          <IconButton color="inherit" aria-label="Editar" onClick={this._handleEditClick}>
            <Create />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

const RecipeSearchResult = ({ recipes, onEditRecipeClick }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Tooltip title="Ordenar" enterDelay={300}>
                <TableSortLabel active={true}>Nombre</TableSortLabel>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title="Ordenar" enterDelay={300}>
                <TableSortLabel active={true}>Ingredientes</TableSortLabel>
              </Tooltip>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes.map(r => (
            <RecipeRecord recipe={r} onEditRecipeClick={onEditRecipeClick} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RecipeSearchResult;
