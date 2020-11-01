import React from 'react'
import { connect } from 'react-redux'

const ExplanationsList = ({ explanations }) => {
    return (
        <div>
            {explanations.map(exp => <ul><li>{exp.categories} - {exp.keywords} - {exp.future_studies}</li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { explanations: state.explanations }
}

export default connect(mapStateToProps)(ExplanationsList)