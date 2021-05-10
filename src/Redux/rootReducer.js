import {combineReducers} from 'redux';
import AuthReducer from './auth/AuthReducer';
import modalReducer from './modals/modalReducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import {storage} from 'redux-persist/lib/storage/session'; //Session Storage

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ["auth"],
}

var rootReducer = combineReducers({
    auth: AuthReducer,
    modal: modalReducer,
})



export default persistReducer(persistConfig,rootReducer);