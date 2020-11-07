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
                            <p >{exp.description}</p>
                            <p >{exp.future_studies}</p>
                            <p >Tags: {exp.tag_list.map(tag => <p>{tag} </p>)}</p>
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