import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { HashRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => null
})

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: () => null
})

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
        </div>
      </Router>
    )
  }
}

export default hot(module)(Routers)
