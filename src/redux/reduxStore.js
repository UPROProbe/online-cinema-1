import movieReducer from "./movieReducer";
import userReducer from "./userReducer";
const { createStore, combineReducers } = require("redux")

let reducers=combineReducers({
    movies: movieReducer,
    users: userReducer,
});
let store = createStore(reducers);

export default store;