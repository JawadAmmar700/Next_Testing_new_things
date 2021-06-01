

const UserReducer = (State = [], action) => {
    switch (action.type) {
        case 'Add_User':
            return State = action.user
        default:
            return State
    }


}


export default UserReducer