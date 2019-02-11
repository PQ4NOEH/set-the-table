const initialState = {
    currentRecipe: undefined
}

function reducer(state, action){
    if(action.type === "ADD_RECIPE"){
        return Object.assign({}, state, { currentRecipe: action.payload });
    }
    if(action.type === "SET_RECIPE"){
        return Object.assign({}, state, { currentRecipe: action.payload });
    }
    if(action.type === "FECH_RECIPE"){
        return Object.assign({}, state, { currentRecipe: action.payload });
    }

    return initialState
}

export default reducer;