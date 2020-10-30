import React, { useState, useEffect } from 'react'

const Explanations = () => {

    const [explanations, setExplanations] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getExplanations()
    }, [])

    const getExplanations = async () => {
        setLoading(true)
        fetch("http://localhost:3000/explanations")
            .then(res => res.json())
            .then(data => {
                setExplanations(data)
                setLoading(false)
            })
    }
    if (loading) {
        return <h4>Loading...</h4>
    }
    return (
        <ul className="collection-width-header">
            <li className="collection-header">
                <h4 className="center">Explanations</h4>
            </li>
            {!loading && explanations.length === 0 ? (<p className="center">No explanations to show...</p>) : explanations.map(exp => <li>{exp.categories}</li>)}
        </ul>
    )
}

export default Explanations
