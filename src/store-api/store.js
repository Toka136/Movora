import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmr from "./slices/Films-slice"
import Usersr from "./slices/Users-slice"
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  Users: Usersr,
  filmreducer:filmr,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist:["Users","filmreducer"]
};
const Users = persistReducer(persistConfig, rootReducer);

const store=configureStore({
    reducer:{
        // filmreducer:filmr,
        Users:Users,
    }
})
export const persistor = persistStore(store);
export default store;