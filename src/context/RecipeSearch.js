import React from "react";
import RecipeSearchFilter from "../components/RecipeSearch/RecipeSearchFilter";
import RecipeSearchResult from "../components/RecipeSearch/RecipeSearchResult";
import { withRouter } from "react-router";

const recipes = [
    {
        id:21212,
        name: 'Crema de pescado',
        ingredients:['Langostinos', 'Calabaza', 'puerro', 'Zanahoria']
    },
    {
        id:32322,
        name: 'Pollo asado',
        ingredients:['Pollo', 'Patatas', 'romero', 'Zanahoria']
    },
    {
        id:4433,
        name: 'Pizza beicon',
        ingredients:['Beicon', 'Masa pizza', 'Mezcla de quesos']
    }
]

class RecipeSearch extends React.Component {
    onEditRecipeClick=(recipe)=> this.props.history.push(`/recipe/${recipe.id}`);
  render() {
    return (
      <div>
        <RecipeSearchFilter />
        <RecipeSearchResult 
            onEditRecipeClick={this.onEditRecipeClick} 
            recipes={recipes}
        />
      </div>
    );
  }
}

export default withRouter(RecipeSearch);
