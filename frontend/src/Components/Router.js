import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Components/Home'
import About from '../Components/About'
import ExplanationsContainer from './ExplanationsContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explanations" component={ExplanationsContainer} />
            <Route path="/about" component={About} />
        </Switch>
    )
}

export default Router