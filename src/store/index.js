import { createStore } from 'redux';
import RecipeReducer from './Recipe/RecipeReducers';
import RecipeSearchReducer from './RecipeSearch/RecipeSearchReducer';

export default createStore({
    recipe: RecipeReducer,
    recipeSearch: RecipeSearchReducer
});