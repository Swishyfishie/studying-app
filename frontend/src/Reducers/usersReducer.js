export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            debugger
            return [...state, action.payload]
        default:
            return state
    }
}