import { combineReducers } from "@reduxjs/toolkit";
// import {persistReducer} from 'redux-persist';
// import storage from "redux-persist/lib/storage";

import themeReducer from '../components/layout/themeSlice';


// const persistConfig ={
//     key:'root',
//     storage,
//     whitelist:[]
// };

 const rootReducer=combineReducers({
    theme: themeReducer
});

// export default persistReducer(persistConfig ,rootReduser);
export default rootReducer;