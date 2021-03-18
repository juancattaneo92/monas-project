import React from 'react';
import { connect } from 'react-redux'
import SignInFormContainer from '../Session/SignInFormContainer';
import SignUpFormContainer from '../Session/SignUpFormContainer';
import { closeModal } from '../../actions/ModalActions'


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case "signin":
      component = <SignInFormContainer />;
      break;
    case "signup":
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

