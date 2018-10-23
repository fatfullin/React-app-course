import React from 'react'
import './Footer.css'


const Footer = ({data, children}) => (
    <div className="FooterGroup">
        <p>
        Create app flows and components. Express their properties and data linkage visually.
        </p>
        <button>Tweet</button>
        <div className="LinkGroup">
            {data.allContentfulLink.edges.map(edge => (
             <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </div>
        <p className="Copyright">{children}</p>
        
    </div>
)


export default Footer 

