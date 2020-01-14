import React, { Component } from 'react'
import style from './style.styl'

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <header className={ style.header }>
        <h1>react boilerplate</h1>
        <h3>--- multi page</h3>
      </header>
    )
  }
}

export default Index
