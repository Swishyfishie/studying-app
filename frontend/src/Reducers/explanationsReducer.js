export const explanationsReducer = (state = [], action) => {
    // console.log(action)
    switch (action.type) {
        case 'FETCH_EXPLANATIONS':
            console.log(action.payload)
            return action.payload
        case 'ADD_EXPLANATION':

            return [...state, action.payload]
        case 'DELETE_EXPLANATION':
            return state.filter(exp => exp.id !== action.payload.id);

        default:
            return state
    }
}

