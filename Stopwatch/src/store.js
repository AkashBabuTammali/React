import {createStore,combineReducers} from "redux";
import timerReducer from "./reducer/timerReducer";
import lapsReducer from "./reducer/lapsReducer";

const rootReducer = combineReducers({
   tmr: timerReducer,
   lpr: lapsReducer 
})

 const store = createStore(rootReducer);
 export default store;