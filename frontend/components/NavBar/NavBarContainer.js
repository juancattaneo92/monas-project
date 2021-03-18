import { connect } from 'react-redux'
import { signup } from '../../util/SessionApiUtil'
import NavBar from './NavBar'
import { openModal } from '../../actions/ModalActions'
import { logout } from '../../actions/SessionActions'


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout()),
        openModal: (modal) => { dispatch(openModal(modal)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
