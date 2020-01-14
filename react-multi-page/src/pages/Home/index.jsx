import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Header from '../../components/header'
import style from './style.styl'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={ style.home }>
        <Header />
        <p>Home</p>
        <a href="../">Link To Index</a>
        <a href="./detail/">Link To Detail</a>
      </div>
    )
  }
}

export default hot(module)(Home)
