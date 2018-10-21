import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import Cell from '../components/Cell';
import staticdata from '../../staticdata.json'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Kick off your project with this default boilerplate. This barebones starter ships with the main Gatsby     configuration files you might need.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    
    
    <div className="Cards">
      <h2>11 more courses</h2>
      <div className="CardGroup">
            <Card
            title="React for designers"
            text="12 sections"
            image={require('../images/wallpaper.jpg')}
            />
            <Card
            title="React for designers"
            text="12 sections"
            image={require('../images/wallpaper2.jpg')}
            />
            <Card
            title="React for designers"
            text="12 sections"
            image={require('../images/wallpaper3.jpg')}
            />
            <Card
            title="React for designers"
            text="12 sections"
            image={require('../images/wallpaper4.jpg')}
            />
       </div>
    </div>
      
    <Section
          image={require('../images/wallpaper2.jpg')}
          logo={require('../images/logo-react.png')}
          title="React for Designers"
          text="Create app flows and components. Express their properties and data linkage visually. Get code immediately.
          React Studio's code output is clean and complete ReactJS projects with nothing extra."
    />
      
    <div className="SectionCellGroup">
        {staticdata.cellss.map(cello => (
        
            <Cell 
              title={cello.title}
              image={cello.image}
            />
        ))}
    </div>

  </Layout>
)

export default IndexPage

