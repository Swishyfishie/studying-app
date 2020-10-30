import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Search from './components/layout/Search'
import Navbar from './components/layout/Navbar'

const App = () => {


  useEffect(() => {
    // Init materialize css
    M.AutoInit()
  })
  return (<Fragment>
    <Navbar />
    <Search />
  </Fragment>
  )
}

export default App;
