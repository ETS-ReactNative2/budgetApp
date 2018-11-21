import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
export const store = createStoreWithMiddleware(persistedReducer)
export const persistor = persistStore(store)
