import { SET_SEARCH_TERM } from './searchBarActions';

const initialState = {
    searchTerm: '',
};

const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
};

export default searchBarReducer;