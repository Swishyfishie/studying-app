import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Explanations from './components/Explanations/Explanations'
import Search from './components/Layout/Search'
import Navbar from './components/Layout/Navbar'

const App = () => {


  useEffect(() => {
    // Init materialize css
    M.AutoInit()
  })
  return (<Fragment>
    <Navbar />
    <Search />
    <div className="container">
      <Explanations />
    </div>
  </Fragment>
  )
}

export default App;
