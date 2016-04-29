import { expect } from 'chai'
// import R from 'ramda'

function inRange() {
  return
}

describe('inRange', () => {
  it('is in range', () => {
    expect(inRange(5, 10, 7)).to.eq(7)
  })

  it('below range', () => {
    expect(inRange(5, 10, 3)).to.eq(5)
  })

  it('above range', () => {
    expect(inRange(5, 10, 11)).to.eq(10)
  })
})

function notAbove() {
  return
}

describe('notAbove', () => {
  it('above', () => {
    expect(notAbove(100, 105)).to.eq(100)
  })

  it('below', () => {
    expect(notAbove(100, 95)).to.eq(95)
  })
})

function notBelow() {
  return
}

describe('notBelow', () => {
  it('above', () => {
    expect(notBelow(100, 110)).to.eql(110)
  })

  it('below', () => {
    expect(notBelow(100, 90)).to.eql(100)
  })
})

function selectProperties() {
  return
}

describe('selectProperties', () => {
  const data = {
    awk: 'bla',
    foo: 'bar',
    doh: 'doh'
  }

  it('empty object if not found', () => {
    expect(selectProperties(['nope'], data)).to.eql({})
  })

  it('returns properties', () => {
    const actual = selectProperties(['awk', 'foo'], data)

    expect(actual).to.be.eql({ awk: 'bla', foo: 'bar' })
  })
})

function setProperty() {
  return
}

describe('setProperty', () => {
  const data = {
    awk: 'bla',
    foo: 'bar',
    doh: 'doh'
  }

  it('appends the new property', () => {
    const actual = setProperty('key', 'VALUE', data)
    const expected = {
      awk: 'bla',
      foo: 'bar',
      doh: 'doh',
      key: 'VALUE'
    }

    expect(actual).to.eql(expected)
  })

  it('updates existing property', () => {
    const actual = setProperty('foo', 'NEW', data)
    const expected = {
      awk: 'bla',
      foo: 'NEW',
      doh: 'doh'
    }

    expect(actual).to.eql(expected)
  })
})
