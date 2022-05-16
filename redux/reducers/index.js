import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    CategoryReducer: categoryReducer,
});

export default rootReducer;