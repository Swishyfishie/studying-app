import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExplanation } from '../Actions/explanationsActions'
class ExplanationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            explanation: {
                categories: "",
                keywords: "",
                future_studies: ""
            }
        }
    }


    handleChange = (e) => {
        this.setState({ explanation: { ...this.state.explanation, [e.target.name]: e.target.value } })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addExplanation(this.state)
        e.target.reset()
    }



    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="categories">Category</label>
                <input type="text" value={this.state.categories} onChange={this.handleChange} name="categories" />
                <br />
                <label htmlFor="keywords">Keywords</label>
                <input type="text" value={this.state.keywords} onChange={this.handleChange} name="keywords" />
                <br />
                <label htmlFor="future_studies">Future Studies</label>
                <input type="text" value={this.state.future_studies} onChange={this.handleChange} name="future_studies" />
                <br />
                <input type="submit" value="Add Explanation" />
            </form>

        )
    }
}

export default connect(null, { addExplanation })(ExplanationForm)