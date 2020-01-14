import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Header from '../../../components/header'
import style from './style.styl'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={ style.detail }>
        <Header />
        <p>Detail</p>
        <a href="../">Link To Home</a>
      </div>
    )
  }
}

export default hot(module)(Detail)
