import React, { Component } from 'react'
import Header from '../../components/Header'
import style from './style.styl'
import logo from './images/logo.png'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={ style.home }>
        <Header />
        <img src={ logo } />
        <p>Hello World!</p>
        <a href="./#/about">Link To About</a>
      </div>
    )
  }
}

export default Home
