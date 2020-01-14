import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '../../../src/components/Header'

describe('Header', () => {
  const wrapper = shallowMount(Header)
  const header = wrapper.find('header')
  const h1 = wrapper.find('h1')

  it('有 header 标签', () => {
    expect(header.exists()).to.be.true
  })

  it('有 h1 标签', () => {
    expect(h1.exists()).to.be.true
  })

  it('h1 的文案为“VUE 单页模版”', () => {
    expect(h1.text()).to.equal('VUE 单页模版')
  })

  it('h1 标签在 header 标签中', () => {
    expect(header.contains('h1')).to.be.true
  })
})
