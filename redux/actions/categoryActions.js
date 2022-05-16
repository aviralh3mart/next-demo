import { action, createRequestTypes } from './base';

export const categoryActionTypes = {
    GET_CATEGORIES: createRequestTypes('GET_CATEGORIES'),
    GET_CATEGORY_BY_ID: createRequestTypes('GET_CATEGORY_BY_ID'),
};

/**
 *
 */
class CategoryActions {
    /**
     *
     * @return {{type: *}}
     */
    getCategories = () => action(categoryActionTypes.GET_CATEGORIES.REQUEST, {})

    /**
     *
     * @param getCategoriesLoading
     * @return {{type: *}}
     */
    getCategoriesLoading = (getCategoriesLoading) => action(categoryActionTypes.GET_CATEGORIES.LOADING, {
        getCategoriesLoading,
    })

    /**
     *
     * @param categories
     * @return {{type: *}}
     */
    getCategoriesSuccess = (categories) => action(categoryActionTypes.GET_CATEGORIES.SUCCESS, {
        categories,
    })

    /**
     *
     * @param categoryId
     * @returns {{type: *}}
     */
    getCategoryById = (categoryId) => action(categoryActionTypes.GET_CATEGORY_BY_ID.REQUEST, {
        categoryId,
    })

    /**
     *
     * @param getCategoryByIdLoading
     * @returns {{type: *}}
     */
    getCategoryByIdLoading = (getCategoryByIdLoading) => action(categoryActionTypes.GET_CATEGORY_BY_ID.LOADING, {
        getCategoryByIdLoading,
    })

    /**
     *
     * @param category
     * @returns {{type: *}}
     */
    getCategoryByIdSuccess = (category) => action(categoryActionTypes.GET_CATEGORY_BY_ID.SUCCESS, {
        category,
    })
}

export default new CategoryActions();
