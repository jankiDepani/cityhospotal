import { applyMiddleware, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from "./reducer"
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/root.saga"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['madicines', 'addtocart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const MultiMiddleware =  [sagaMiddleware, thunk]


const configerStore = () => {
    const store = createStore(persistedReducer, applyMiddleware(...MultiMiddleware));

    sagaMiddleware.run(rootSaga)

    return store;
}

export const store = configerStore();
export const persistor = persistStore(store)