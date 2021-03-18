import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
import uiReducer from './UiReducer';
import EntitiesReducer from "./EntitiesReducer";
// import ErrorsReducer from "./ErrorsReducer"

const rootReducer = combineReducers({
    session: SessionReducer,
    ui: uiReducer,
    entities: EntitiesReducer,
    // errors: ErrorsReducer
});

export default rootReducer;
