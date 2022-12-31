import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import loadingReducer from './slice/loadingSlice'
const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer
})
const store = configureStore({
    reducer: rootReducer,
})
export default store