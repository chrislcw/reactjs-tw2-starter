import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
// import logger from 'redux-logger';

import { createBrowserHistory } from "history"
import {
  createReduxHistoryContext,
  // reachify
} from "redux-first-history"

import reducers from "./reducers"
import sagas from "./sagas"

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: createBrowserHistory(),
})

const sagaMiddleware = createSagaMiddleware()

let middlewares = [thunk, sagaMiddleware, routerMiddleware]
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  middlewares = [thunk, sagaMiddleware, routerMiddleware]
}

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [],
}

const AppPersistConfig = {
  key: "App",
  storage,
  whitelist: ["language"],
}

const AuthPersistConfig = {
  key: "Auth",
  storage,
  whitelist: ["user_id", "access_token", "role"],
}

const rootReducer = combineReducers({
  router: routerReducer,
  App: persistReducer(AppPersistConfig, reducers.App),
  // Surveys: reducers.Surveys,
  // Questionsets: reducers.Questionsets,
  Auth: persistReducer(AuthPersistConfig, reducers.Auth),
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
  // compose(applyMiddleware(...middlewares))
)
sagaMiddleware.run(sagas)

const persistor = persistStore(store)
const history = createReduxHistory(store)

export { store, persistor, history }
