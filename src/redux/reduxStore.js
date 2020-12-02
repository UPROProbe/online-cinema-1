import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";
const { createStore, combineReducers } = require("redux")

let reducers=combineReducers({
    movies: movieReducer,
    users: userReducer,
    auth: authReducer,
});
let store = createStore(reducers);

export default store;