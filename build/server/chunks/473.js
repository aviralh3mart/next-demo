"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ categoryActionTypes),
  "Z": () => (/* binding */ categoryActions)
});

;// CONCATENATED MODULE: ./redux/actions/base.js
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const LOADING = "LOADING";
const ERROR = "ERROR";
const createRequestTypes = (base)=>({
        REQUEST: `${base}_${REQUEST}`,
        LOADING: `${base}_${LOADING}`,
        SUCCESS: `${base}_${SUCCESS}`,
        ERROR: `${base}_${ERROR}`
    })
;
const action = (type, payload = {})=>({
        type,
        ...payload
    })
;

;// CONCATENATED MODULE: ./redux/actions/categoryActions.js

const categoryActionTypes = {
    GET_CATEGORIES: createRequestTypes("GET_CATEGORIES"),
    GET_CATEGORY_BY_ID: createRequestTypes("GET_CATEGORY_BY_ID")
};
/**
 *
 */ class CategoryActions {
    /**
     *
     * @return {{type: *}}
     */ getCategories = ()=>action(categoryActionTypes.GET_CATEGORIES.REQUEST, {})
    ;
    /**
     *
     * @param getCategoriesLoading
     * @return {{type: *}}
     */ getCategoriesLoading = (getCategoriesLoading)=>action(categoryActionTypes.GET_CATEGORIES.LOADING, {
            getCategoriesLoading
        })
    ;
    /**
     *
     * @param categories
     * @return {{type: *}}
     */ getCategoriesSuccess = (categories)=>action(categoryActionTypes.GET_CATEGORIES.SUCCESS, {
            categories
        })
    ;
    /**
     *
     * @param categoryId
     * @returns {{type: *}}
     */ getCategoryById = (categoryId)=>action(categoryActionTypes.GET_CATEGORY_BY_ID.REQUEST, {
            categoryId
        })
    ;
    /**
     *
     * @param getCategoryByIdLoading
     * @returns {{type: *}}
     */ getCategoryByIdLoading = (getCategoryByIdLoading)=>action(categoryActionTypes.GET_CATEGORY_BY_ID.LOADING, {
            getCategoryByIdLoading
        })
    ;
    /**
     *
     * @param category
     * @returns {{type: *}}
     */ getCategoryByIdSuccess = (category)=>action(categoryActionTypes.GET_CATEGORY_BY_ID.SUCCESS, {
            category
        })
    ;
}
/* harmony default export */ const categoryActions = (new CategoryActions());


/***/ })

};
;