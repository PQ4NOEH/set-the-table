const initialState = {
    searchResult = [],
    filter = undefined
};


function reducer(state, action){
    if(action.type === "SEARCH_RECIPES"){
        return {filter:action.payload, ...state};
    }
}