// explanations fetch action

export const fetchExplanations = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/explanations")
            .then(resp => resp.json())
            .then(explanations => dispatch({ type: 'FETCH_EXPLANATIONS', payload: explanations }))
    }
}

export const addExplanation = (explanation) => {
    return (dispatch) => {
        fetch("http://localhost:3000/explanations", {
            method: "POST",
            body: JSON.stringify(explanation),
            headers: { "Content-Type": 'application/json' }
        })
            .then(resp => resp.json())
            .then(explanations => dispatch({ type: "ADD_EXPLANATION", payload: explanations }))
    }

}