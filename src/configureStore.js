/* eslint-disable no-shadow */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./app.state";

export const reducersList = { app };
const allReducers = combineReducers(reducersList);
export default createStore(allReducers, applyMiddleware(thunk));
export const selectors = {
  app: ({ app }) => app,
};
