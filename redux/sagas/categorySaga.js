import { put, takeLatest, all } from 'redux-saga/effects';
import CategoryActions, { categoryActionTypes } from '../actions/categoryActions';
import CategoryService from '../services/categoryService';

/**
 *
 */
function* _getCategories() {
    try {
        yield put(CategoryActions.getCategoriesLoading(true));
        const categories = yield CategoryService.getCategories();
        yield put(CategoryActions.getCategoriesSuccess(categories));
        yield put(CategoryActions.getCategoriesLoading(false));
    } catch (error) {
        yield put(CategoryActions.getCategoriesLoading(false));
    }
}

/**
 *
 */
function* getCategories() {
    yield takeLatest(categoryActionTypes.GET_CATEGORIES.REQUEST, _getCategories);
}

/**
 * @param action
 */
function* _getCategoryById(action) {
    try {
        yield put(CategoryActions.getCategoryByIdLoading(true));
        const category = yield CategoryService.getCategoryById(action.categoryId);
        yield put(CategoryActions.getCategoryByIdSuccess(category));
        yield put(CategoryActions.getCategoryByIdLoading(false));
    } catch (error) {
        yield put(CategoryActions.getCategoryByIdLoading(false));
        notification.open({
            type: 'error',
            message: 'Error retrieving category information.',
            duration: 4,
        });
    }
}

/**
 *
 */
function* getCategoryById() {
    yield takeLatest(categoryActionTypes.GET_CATEGORY_BY_ID.REQUEST, _getCategoryById);
}

/**
 *
 */
export default function* categorySaga() {
    yield all([getCategories(), getCategoryById()]);
}
