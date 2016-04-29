import { expect } from 'chai'
// import R from 'ramda'

function inRange() {
  return
}

describe('inRange', () => {
  it('is in range', () => {
    expect(inRange(5, 10, 7)).to.eql(7)
  })

  it('below range', () => {
    expect(inRange(5, 10, 3)).to.eql(5)
  })

  it('above range', () => {
    expect(inRange(5, 10, 11)).to.eql(10)
  })
})
