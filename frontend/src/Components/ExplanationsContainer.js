// explanations container = data + methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExplanations } from '../Actions/explanationsActions'
import ExplanationForm from './ExplanationForm'

export class ExplanationsContainer extends Component {

    componentDidMount() {
        this.props.fetchExplanations()
    }

    render() {
        return (
            <div>
                <ExplanationForm />
            </div>
        )
    }
}

export default connect(null, { fetchExplanations })(ExplanationsContainer)



