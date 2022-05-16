import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from "../reducers";
import rootSaga from '../sagas';

const initalState = {};
const sagaMiddleware = createSagaMiddleware();

const makeStore = (initialState) => {

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

    store.runSaga = () => {
        if (store.saga) return;
        store.saga = sagaMiddleware.run(rootSaga);
    };

    store.stopSaga = async () => {
        if (!store.saga) return;
        store.dispatch(END);
        await store.saga.done;
        store.saga = null;
    };

    store.execSagaTasks = async (isServer, tasks) => {
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


export const wrapper = createWrapper(makeStore);