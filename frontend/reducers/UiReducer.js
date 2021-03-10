import { combineReducers } from 'redux';
import modalReducer from './ModalReducer';

const uiReducer = combineReducers({
  modal: modalReducer
});

export default uiReducer;