const initialState = {
  name: null,
  age: 0,
}

const UserReducer = (State = initialState, action) => {
  switch (action.type) {
    case 'Add_User':
      return {
        ...State,
        name: action.payload.user,
        age: 15,
      }
    case 'Remove_User':
      return (State = action.payload.user)
    default:
      return State
  }
}

export default UserReducer
