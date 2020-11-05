// explanations container = data + methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExplanations } from '../Actions/explanationsActions'
import ExplanationForm from './ExplanationForm'
import ExplanationsList from './ExplanationsList'

export class ExplanationsContainer extends Component {

    componentDidMount() {
        this.props.fetchExplanations()
    }

    render() {
        return (
            <div>
                Explanation Container
                <ExplanationsList />
                <ExplanationForm />
            </div>
        )
    }
}

export default connect(null, { fetchExplanations })(ExplanationsContainer)



