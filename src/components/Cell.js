import React from 'react'
import './Cell.css'

const Cell = props => (
    <div className="CellGroup">
            <img className="CellImage" src={props.image} />
            <p className="CellTitle">{props.title}
            </p>
    </div>
)

export default Cell
