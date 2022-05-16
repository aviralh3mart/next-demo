import CategoryActions, { categoryActionTypes } from '../actions/categoryActions';
const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case categoryActionTypes.GET_CATEGORIES.LOADING:
            const { getCategoriesLoading } = action;
            return {
                ...state,
                getCategoriesLoading,
            };
        case categoryActionTypes.GET_CATEGORIES.SUCCESS:
            const { categories } = action;
            return {
                ...state,
                categories,
            };
        default: return state;
    }
};

export default reducer;