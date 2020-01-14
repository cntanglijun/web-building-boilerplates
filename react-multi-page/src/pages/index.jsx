import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Header from '../components/header'
import style from './style.styl'
import logo from './images/logo.png'

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={ style.index }>
        <Header />
        <img src={ logo } />
        <p>Index</p>
        <a href="./home/">Link To Home</a>
      </div>
    )
  }
}

export default hot(module)(Index)
