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


// export const deleteExplanation = obj => dispatch => {
//     console.log(obj.id)
//     fetch(`http://localhost:3000/explanations/${obj.id}`, {
//         method: "DELETE"
//     })
//         .then(res => dispatch({ type: "DELETE_EXPLANATION", payload: obj }))
//         .catch(err => console.log(err))
// }

// export const deleteExplanation = (id) => {

//     return (dispatch) => {
//         fetch(`http://localhost:3000/explanations/${id}`, {
//             method: 'DELETE'
//         })
//             .then(res => res.json())

//             .then(exp => dispatch({ type: 'DELETE_EXPLANATION', exp }))
//     }

// }

export const deleteExplanation = (id) => {
    return (dispatch) => {
        fetch("http://localhost:3000/explanations/" + id, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then((id) => dispatch({ type: "DELETE_EXPLANATION", payload: id }));
    };
};