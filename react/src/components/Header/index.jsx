import React, { Component } from 'react'
import style from './style.styl'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <header className={ style.header }>
        <h1>react-boilerplate</h1>
      </header>
    )
  }
}

export default Header
