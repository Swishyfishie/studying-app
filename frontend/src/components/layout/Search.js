import React from 'react'

const Search = () => {
    return (
        <nav style={{ marginBottom: '30px' }} className=" blue lighten-3">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Search
