import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Components/Home'
import ExplanationsList from './ExplanationsList'
import About from '../Components/About'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explanations" component={ExplanationsList} />
            <Route path="/about" component={About} />
        </Switch>
    )
}

export default Router