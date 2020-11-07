import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExplanation } from '../Actions/explanationsActions'


class ExplanationForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         users,
    //         explanation: {
    //             categories: "",
    //             keywords: "",
    //             future_studies: ""
    //         }
    //     }

    // }

    state = {
        users: [],
        categories: [],
        explanations: {
            description: "",
            tag_list: "",
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
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s10">
                            <label htmlFor="categories">Category</label>
                            <input type="text" value={this.state.categories} onChange={this.handleChange} name="categories" />
                        </div>
                        <div className="input-field col s10">
                            <label htmlFor="keywords">Keywords</label>
                            <input type="text" value={this.state.keywords} onChange={this.handleChange} name="keywords" />
                        </div>

                        <div className="input-field col s10">
                            <label htmlFor="future_studies">Future Studies</label>
                            <input type="text" value={this.state.future_studies} onChange={this.handleChange} name="future_studies" />
                        </div>

                        <input type="submit" value="Add Explanation" />

                    </div>
                </form>
            </div>

        )
    }
}

export default connect(null, { addExplanation })(ExplanationForm)