const CounterSlice = (State = 0, action) => {
    switch (action.type) {
        case 'Inc':
            return State += 2
        case 'Dec':
            return State -= 1
        default:
            return State
    }
}

export default CounterSlice