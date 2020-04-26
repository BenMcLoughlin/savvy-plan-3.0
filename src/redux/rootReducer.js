import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {combineReducers} from "redux"
import main_reducer from "redux/main_reducer"
import user_reducer from "redux/user_reducer"
import ui_reducer from "redux/ui_reducer"

const persistConfig = {
    key: "root",
    storage, 
    whitelist: [
    "main_reducer",
    "user_reducer",
    "ui_reducer",
]
}

const rootReducer = combineReducers({
       ui_reducer, 
       main_reducer,
       user_reducer,    
   })

export default persistReducer(persistConfig, rootReducer)


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// combines all reducers to create a global reducer which is then passed in the main index into the createStore function