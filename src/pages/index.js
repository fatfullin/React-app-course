import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Kick off your project with this default boilerplate. This barebones starter ships with the main Gatsby     configuration files you might need.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>

  </Layout>
)

export default IndexPage
