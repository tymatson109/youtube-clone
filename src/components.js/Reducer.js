export const initialState = {
    term: '',
    results: [],
    open: true,
    user: []
}

export const actionTypes = {
    SET_TERM: "SET_TERM",
    SET_RESULTS: "SET_RESULTS",
    SET_SIDEBAR: "SET_SIDEBAR",
    SET_USER: "SET_USER"
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_TERM:
            return {
                ...state,
                searchTerm: action.term
            };
        case actionTypes.SET_RESULTS:
            return {
                ...state, 
                results: action.results
            }
        case actionTypes.SET_SIDEBAR:
            return {
                ...state,
                open: action.open
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;