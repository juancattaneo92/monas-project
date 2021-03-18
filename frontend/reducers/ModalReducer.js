import { OPEN_MODAL, CLOSE_MODAL } from '../actions/ModalActions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;