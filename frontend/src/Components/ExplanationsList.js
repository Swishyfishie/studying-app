import React from 'react'
import { connect } from 'react-redux'
import { deleteExplanation } from '../Actions/explanationsActions'


const ExplanationsList = ({ explanations, deleteExplanation }) => {
    console.log(explanations)
    return (
        <div>
            {/* <ExplanationsContainer /> */}
            {explanations.map(exp => {
                return <ul>
                    <li >{exp.categories} - {exp.keywords} - {exp.future_studies}</li>
                    <button onClick={() => deleteExplanation(exp.id)}>Button</button>
                </ul>
            })}
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    deleteExplanation: id => dispatch({ type: 'DELETE_EXPLANATION', id })
});


function mapStateToProps(state) {
    return { explanations: state.explanations }
}


export default connect(mapStateToProps, { deleteExplanation })(ExplanationsList)