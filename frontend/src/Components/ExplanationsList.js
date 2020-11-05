import React from 'react'
import { connect } from 'react-redux'
import { deleteExplanation } from '../Actions/explanationsActions'


const ExplanationsList = ({ explanations, deleteExplanation }) => {
    console.log(explanations)
    return (
        <ul>
            {explanations.map(exp => {
                return <li key={exp.id}>{exp.categories} - {exp.keywords} - {exp.future_studies}
                    <button onClick={() => deleteExplanation(exp.id)}>Button</button>
                </li>
            })}

        </ul>
    )
}



function mapStateToProps(state) {
    return { explanations: state.explanations }
}


export default connect(mapStateToProps, { deleteExplanation })(ExplanationsList)