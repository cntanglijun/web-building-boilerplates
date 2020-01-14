import React, { Component } from 'react'
import Header from '../../components/Header'
import style from './style.styl'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={ style.about }>
        <Header />
        <p>About Page</p>
        <a href="./#/">Link To Home</a>
      </div>
    )
  }
}

export default Home
