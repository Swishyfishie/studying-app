// this is the form where every step of the entry will be generated
import React from 'react'
import Category from './form_components/Category'
import Explanation from './form_components/Explanation'
import Keywords from './form_components/Keywords'

class Form extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <h1>Welcome to form</h1>
                <Category />
                <Explanation />
                <Keywords />
            </div>
        )
    }
}

export default Form