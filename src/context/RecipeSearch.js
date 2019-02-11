import React from 'react';
import RecipeSearchFilter from '../components/Recipe/RecipeSearchFilter';
import RecipeSearchResult from '../components/Recipe/RecipeSearchResult';


const RecipeSearch = ()=>{
    return <div>
        <RecipeSearchFilter />
        <RecipeSearchResult />
    </div>
}

export default RecipeSearch;