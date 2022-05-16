"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(837);



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(App));


/***/ }),

/***/ 837:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(550);
} else {}


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wrapper": () => (/* binding */ wrapper)
});

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: ./redux/actions/categoryActions.js + 1 modules
var categoryActions = __webpack_require__(473);
;// CONCATENATED MODULE: ./redux/reducers/categoryReducer.js

const initialState = {};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case categoryActions/* categoryActionTypes.GET_CATEGORIES.LOADING */.X.GET_CATEGORIES.LOADING:
            const { getCategoriesLoading  } = action;
            return {
                ...state,
                getCategoriesLoading
            };
        case categoryActions/* categoryActionTypes.GET_CATEGORIES.SUCCESS */.X.GET_CATEGORIES.SUCCESS:
            const { categories  } = action;
            return {
                ...state,
                categories
            };
        default:
            return state;
    }
};
/* harmony default export */ const categoryReducer = (reducer);

;// CONCATENATED MODULE: ./redux/reducers/index.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    CategoryReducer: categoryReducer
});
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
;// CONCATENATED MODULE: ./redux/apis/helpers.js
/**
 *
 */ class Helpers {
    /**
   * fetchHelper
   *
   * @param {object} reqParams parameters for request
   * @return {Promise} for parameters
   */ fetchHelper = (reqParams)=>{
        const { url , method , headers ={} , data , file ,  } = reqParams;
        const accessToken = localStorage.getItem("h3m-customer-access-token");
        const fetchPromise = (resolve, reject)=>{
            fetch(url, {
                method,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${accessToken}`
                },
                body: file || data && JSON.stringify(data)
            }).then((response)=>response
            ).then((response)=>[
                    response.json(),
                    response.status
                ]
            ).then(([response, status])=>{
                if (status >= 200 && status <= 300) {
                    resolve(response);
                } else {
                    return [
                        response,
                        status
                    ];
                }
            }).then(([error1, status])=>{
                error1.then((err)=>{
                    let errorMessage = "";
                    switch(status){
                        case 400:
                            errorMessage = err.message || "Bad Request";
                            break;
                        case 401:
                            errorMessage = err.message || "Unauthorized Access";
                            break;
                        case 500:
                            errorMessage = err.message || "Internal server error";
                            break;
                        default:
                            errorMessage = "Error";
                    }
                    throw errorMessage;
                }).catch((error)=>{
                    reject(error);
                });
            }).catch((error)=>{
                reject(error);
            });
        };
        return new Promise(fetchPromise);
    };
    /**
   * get method
   *
   * @param {object} payload for request
   * @return {object} response
   */ get = ({ url , headers  })=>{
        const reqParams = {
            url,
            method: "GET",
            headers
        };
        return this.fetchHelper(reqParams);
    };
    /**
   * post method
   *
   * @param {object} payload for request
   * @return {object} response
   */ post = ({ url , data , customHeaders  })=>{
        const headers = {
            "Content-Type": "application/json",
            ...customHeaders
        };
        const reqParams = {
            url,
            method: "POST",
            headers,
            data
        };
        return this.fetchHelper(reqParams);
    };
    filePost = ({ url , file  })=>{
        const headers = {};
        const reqParams = {
            url,
            method: "POST",
            headers,
            file
        };
        return this.fetchHelper(reqParams);
    };
    /**
   * put method
   *
   * @param {object} payload for request
   * @return {object} response
   */ put = ({ url , data  })=>{
        const headers = {
            "Content-Type": "application/json"
        };
        const reqParams = {
            url,
            method: "PUT",
            headers,
            data
        };
        return this.fetchHelper(reqParams);
    };
    patch = ({ url , data , customHeaders  })=>{
        const headers = {
            "Content-Type": "application/json",
            ...customHeaders
        };
        const reqParams = {
            url,
            method: "PATCH",
            headers,
            data
        };
        return this.fetchHelper(reqParams);
    };
    delete = ({ url  })=>{
        const headers = {
            "Content-Type": "application/json"
        };
        const reqParams = {
            url,
            method: "DELETE",
            headers
        };
        return this.fetchHelper(reqParams);
    };
    /**
   * Method to convert date to 'x days ago' format
   *
   * @param date
   * @return {string}
   */ timeSinceDate = (date)=>{
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return `${interval} years ago`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return `${interval} months ago`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return `${interval} days ago`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return `${interval} hours ago`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return `${interval} minutes ago`;
        }
        return `${Math.floor(seconds)} seconds`;
    };
    /**
   *
   * @param email
   * @return {boolean}
   */ validateEmail = (email)=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    };
    /**
   *
   * @param phone
   * @return {boolean}
   */ validatePhoneNumber(phone) {
        if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone)) {
            return true;
        }
        return false;
    }
}
/* harmony default export */ const helpers = (new Helpers());

;// CONCATENATED MODULE: ./redux/apis/constants.js
const APPS = {
    application: {
        dev: "ksbmu6q3fg",
        prod: "8sz7a103n9"
    }
};
const getStage = ()=>{
    // const currentUrl = window.document?.location.href;
    // if (currentUrl?.includes('dev.h3mart.com') || currentUrl?.includes('localhost')) {
    //   return 'dev';
    // }
    return "prod";
};
const stage = getStage();
const getRequestUrl = (stg, appId)=>`https://${appId}.execute-api.ap-south-1.amazonaws.com/${stg}`
;
/* harmony default export */ const constants = ({
    CATEGORY: `${getRequestUrl(stage, APPS.application[stage])}/category`
});

;// CONCATENATED MODULE: ./redux/services/categoryService.js


/**
 * CategoryService class
 */ class CategoryService {
    /**
     *
     * @return {Promise<*>}
     */ getCategories = async ()=>{
        const categories = await helpers.get({
            url: constants.CATEGORY
        });
        return categories;
    };
    /**
     *
     * @param id
     * @return {Promise<[]>}
     */ getCategoryById = async (id)=>{
        const category = await helpers.get({
            url: `${constants.CATEGORY}?category=${id}`
        });
        return category;
    };
}
/* harmony default export */ const categoryService = (new CategoryService());

;// CONCATENATED MODULE: ./redux/sagas/categorySaga.js



/**
 *
 */ function* _getCategories() {
    try {
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoriesLoading */.Z.getCategoriesLoading(true));
        const categories = yield categoryService.getCategories();
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoriesSuccess */.Z.getCategoriesSuccess(categories));
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoriesLoading */.Z.getCategoriesLoading(false));
    } catch (error) {
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoriesLoading */.Z.getCategoriesLoading(false));
    }
}
/**
 *
 */ function* getCategories() {
    yield (0,effects_namespaceObject.takeLatest)(categoryActions/* categoryActionTypes.GET_CATEGORIES.REQUEST */.X.GET_CATEGORIES.REQUEST, _getCategories);
}
/**
 * @param action
 */ function* _getCategoryById(action) {
    try {
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoryByIdLoading */.Z.getCategoryByIdLoading(true));
        const category = yield categoryService.getCategoryById(action.categoryId);
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoryByIdSuccess */.Z.getCategoryByIdSuccess(category));
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoryByIdLoading */.Z.getCategoryByIdLoading(false));
    } catch (error) {
        yield (0,effects_namespaceObject.put)(categoryActions/* default.getCategoryByIdLoading */.Z.getCategoryByIdLoading(false));
        notification.open({
            type: "error",
            message: "Error retrieving category information.",
            duration: 4
        });
    }
}
/**
 *
 */ function* getCategoryById() {
    yield (0,effects_namespaceObject.takeLatest)(categoryActions/* categoryActionTypes.GET_CATEGORY_BY_ID.REQUEST */.X.GET_CATEGORY_BY_ID.REQUEST, _getCategoryById);
}
/**
 *
 */ function* categorySaga() {
    yield (0,effects_namespaceObject.all)([
        getCategories(),
        getCategoryById()
    ]);
};

;// CONCATENATED MODULE: ./redux/sagas/index.js


/**
 *
 */ function* rootSaga() {
    yield (0,effects_namespaceObject.all)([
        categorySaga(), 
    ]);
};

;// CONCATENATED MODULE: ./redux/store/index.prod.js






const initalState = {};
const sagaMiddleware = external_redux_saga_default()();
const makeStore = (initialState)=>{
    const store = (0,external_redux_namespaceObject.createStore)(reducers, initialState, (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware)));
    store.runSaga = ()=>{
        if (store.saga) return;
        store.saga = sagaMiddleware.run(rootSaga);
    };
    store.stopSaga = async ()=>{
        if (!store.saga) return;
        store.dispatch(external_redux_saga_namespaceObject.END);
        await store.saga.done;
        store.saga = null;
    };
    store.execSagaTasks = async (isServer, tasks)=>{
        store.runSaga();
        tasks(store.dispatch);
        await store.stopSaga();
        if (!isServer) {
            store.runSaga();
        }
    };
    store.runSaga();
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473], () => (__webpack_exec__(484)));
module.exports = __webpack_exports__;

})();