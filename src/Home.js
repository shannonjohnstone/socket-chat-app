import React from 'react'
import { connect } from 'react-redux'
import LayoutMain from './LayoutMain'

const Home = () => (
  <LayoutMain
    title="Welcome to the Home route"
  >
    <p>This is the Home page, setup is now working <span role="img" aria-label="Thumbs up">👍</span> .</p>
  </LayoutMain>
)

export default connect()(Home);
