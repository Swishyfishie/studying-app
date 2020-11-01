export const explanationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EXPLANATIONS':
            return action.payload
        case 'ADD_EXPLANATION':
            return [...state, action.payload]
        default:
            return state
    }
}