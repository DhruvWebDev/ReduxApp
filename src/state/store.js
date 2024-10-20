import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducer/index";
import { thunk } from "redux-thunk";
export const store = createStore(reducers, {}, applyMiddleware(thunk));
