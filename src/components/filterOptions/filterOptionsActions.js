export const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY';

//Action creator to set the filter category
export const setFilterCategory = (category) => ({
    type: SET_FILTER_CATEGORY,
    payload: category,
});