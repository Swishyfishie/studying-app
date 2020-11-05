import React from 'react'
import { connect } from 'react-redux'
import { deleteExplanation } from '../Actions/explanationsActions'


const ExplanationsList = ({ explanations }) => {


    return (
        <div>
            {/* <ExplanationsContainer /> */}
            {explanations.map(exp => {
                return <ul>
                    <li >{exp.categories} - {exp.keywords} - {exp.future_studies}</li>
                    <button onClick={() => deleteExplanation(exp)}>Button</button>
                </ul>
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteExplanation: obj => dispatch({ type: 'DELETE_EXPLANATION', obj })
});


function mapStateToProps(state) {
    return { explanations: state.explanations }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExplanationsList)