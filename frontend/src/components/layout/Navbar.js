import React from 'react'

const Navbar = () => {
    return (
        <div class="navbar-fixed" >
            <nav className="nav-extended" className="blue">
                <div className="nav-wrapper" className="center-align">
                    <a href="#" className="brand-logo">Logo</a>
                    <a href="#" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>
    )
}

export default Navbar
