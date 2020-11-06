import React from 'react'
import { connect } from 'react-redux'
import { deleteExplanation } from '../Actions/explanationsActions'
// import { updateExplanation } from '../Actions/explanationsActions'



class ExplanationsList extends React.Component {

    // state = {
    //     users: [],
    //     explanations: {
    //         ...this.props.explanations
    //     }
    // }


    // handleClick = e => {
    //     e.preventDefault()
    //     if (e.target.tagName === "P") {
    //         // debugger
    //         e.target.innerHTML = `<input type="text" value=${e.target.innerText}></input>`
    //     }
    // }


    // handleKeyDown = e => {
    //     this.setState({ explanations: { ...this.state.explanations, [e.target.classList.value]: e.target.value } })
    //     if (e.key === "Enter") {

    //         debugger
    //         this.props.updateExplanation(e.target.parentElement.parentElement.dataset.key)
    //     }
    // }

    render() {
        return (
            <ul>
                {
                    this.props.explanations.map(exp => {
                        // this.state.explanations.push(exp)
                        return <li key={exp.id} data-key={exp.id}>
                            <p className="category" name="category" value={exp.category} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{exp.categories}</p>
                            <p className="keywords" name="keywords" value={exp.keywords} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{exp.keywords}</p>
                            <p className="future_studies" name="future_studies" value={exp.future_studies} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{exp.future_studies}</p>
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

export default connect(mapStateToProps, { deleteExplanation })(ExplanationsList)