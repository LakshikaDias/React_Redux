import { combineReducers } from "redux";
// import all reducers
import AllPosrReducer from './Allpost';

//root reducer{each reducer can't access store, therefore want "root reducer"}
const rootReducer = combineReducers({
    // "alpost" is the object name of store that all postlist include
    allposts: AllPosrReducer,
})

export default rootReducer;