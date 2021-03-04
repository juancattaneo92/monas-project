import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
// import EntitiesReducer from "./EntitiesReducer";
// import ErrorsReducer from "./ErrorsReducer"

const rootReducer = combineReducers({
    session: SessionReducer,
    // entities: EntitiesReducer,
    // errors: ErrorsReducer
});

export default rootReducer;
