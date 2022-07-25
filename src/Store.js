import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./Components/Reducer/Reducer";
import thunk from 'redux-thunk'


export const store = configureStore({ reducer: rootReducer },applyMiddleware(thunk));

