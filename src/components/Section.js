import React from 'react'
import Wave from './Wave';
import './Section.css'

const Section = props => (
    <div className="SectionGroup">
    <img className="SectionBG" src={props.image} />
    <div className="WaveTop"><Wave /></div>
    <img className="SectionLogo" src={props.logo} />
    <div className="SectionTitleGroup">
        <h3 className="SectionTitle">{props.title}</h3>
        <p className="SectionText">{props.text}</p>
    </div>
    <div className="WaveBottom"><Wave /></div>
    </div>
)

export default Section