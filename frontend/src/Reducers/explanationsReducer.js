export const explanationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EXPLANATIONS':
            return action.payload
        default:
            return state
    }
}