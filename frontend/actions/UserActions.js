import * as UserAPIUtil from "../util/UserApiUtil";

const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = userId => {
  return {
    type: RECEIVE_USER,
    userId
  }
}

export const fetchUser = (userId) => dispatch => {
  return UserAPIUtil.fetchUser(userId).then(
    userId => dispatch(receiveUser(userId))
  )
};