import React from 'react'
import { connect } from 'react-redux'
import { deleteExplanation } from '../Actions/explanationsActions'
import { updateExplanation } from '../Actions/explanationsActions'



class ExplanationsList extends React.Component {

    state = {
        users: [],
        explanations: []
    }

    handleChange = e => {
        debugger
        this.setState({ explanation: { ...this.state.explanation, [e.target.name]: e.target.value } })
    }
    handleClick = e => {
        e.preventDefault()
        if (e.target.tagName === "P") {
            // debugger
            e.target.innerHTML = `<input onChange=${this.handleChange} type="text" value=${e.target.innerText}></input>`
        }
    }


    handleKeyDown = e => {
        if (e.key === "Enter") {

            debugger
            this.props.updateExplanation(e.target.parentElement.parentElement.dataset.key)
        }
    }

    render() {
        return (
            <ul>
                {
                    this.props.explanations.map(exp => {
                        this.state.explanations.push(exp)
                        return <li key={exp.id} data-key={exp.id}>
                            <p className="category" value={exp.category} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{exp.categories}</p>
                            <p className="keywords" value={exp.keywords} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{exp.keywords}</p>
                            <p className="future_studies" value={exp.future_studies} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{exp.future_studies}</p>
                            <button onClick={() => this.props.deleteExplanation(exp.id)}>Delete</button>
                        </li>
                    })
                }

            </ul >
        )


    }


}







function mapStateToProps(state) {
    return { explanations: state.explanations }
}

export default connect(mapStateToProps, { deleteExplanation, updateExplanation })(ExplanationsList)