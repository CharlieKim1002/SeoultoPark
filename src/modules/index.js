import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";
import weatherReducer from "./WeatherModule";

const rootReducer = combineReducers({
    userReducer,
    menuReducer,
    weatherReducer
});

export default rootReducer;