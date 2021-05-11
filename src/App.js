import React, { useReducer } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, history, persistor } from "./redux/store"
import Router from "./router"
import Toast from "./utils/Toast"
import { BrowserRouter } from "react-router-dom"
import {
  AppContext,
  appContextReducer,
  appContextInitialState,
} from "./utils/appContext"

const App = () => {
  const [state, dispatch] = useReducer(
    appContextReducer,
    appContextInitialState
  )
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext.Provider value={{ state, dispatch }}>
          <BrowserRouter>
            <Router history={history} basename={process.env.PUBLIC_URL} />
            <Toast />
          </BrowserRouter>
        </AppContext.Provider>
      </PersistGate>
    </Provider>
  )
}

export default App
