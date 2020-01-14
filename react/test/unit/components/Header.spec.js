import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import Header from '../../../src/components/Header'

let container

describe('Header 组件测试', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('检测文案是否正常', () => {
    act(() => {
      ReactDOM.render(<Header />, container)
    })

    const h1 = container.querySelector('h1')

    expect(h1.textContent).to.equal('react-boilerplate')
  })
})
