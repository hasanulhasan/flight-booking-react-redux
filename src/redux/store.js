import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import actionReducers from "./actionReducers";

const store = createStore(actionReducers, composeWithDevTools(applyMiddleware(logger)))

export default store