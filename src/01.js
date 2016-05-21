import { expect } from 'chai'
// eslint-disable-next-line no-unused-vars
import R from 'ramda'

function inRange() {
  return
}

xdescribe('inRange', () => {
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

xdescribe('notAbove', () => {
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

xdescribe('notBelow', () => {
  it('above', () => {
    expect(notBelow(100, 110)).to.eql(110)
  })

  it('below', () => {
    expect(notBelow(100, 90)).to.eql(100)
  })
})

function multiplyByTwo() {
  return
}

xdescribe('multiplyByTwo', () => {
  it('example', () => {
    const f = multiplyByTwo()

    expect(f(50)).to.eq(100)
  })
})

function multiplyByThreePlusFour() {
  // implement using a different technique then multiplyByTwo
  return
}

xdescribe('multiplyByThreePlusFour', () => {
  it('example', () => {
    const f = multiplyByThreePlusFour()

    expect(f(50)).to.eq(154)
  })
})

function valueOrZero() {
  return
}

xdescribe('valueOrZero', () => {
  it('returns the given value', () => {
    expect(valueOrZero(10)).to.eql(10)
  })

  it('returns 0 for undefined', () => {
    expect(valueOrZero()).to.eql(0)
  })

  it('returns 0 for null', () => {
    expect(valueOrZero(null)).to.eql(0)
  })

  it('returns 0 for NaN', () => {
    expect(valueOrZero(NaN)).to.eql(0)
  })
})

function runAll() {
  return
}

xdescribe('runAll', () => {
  it('applies all of the functions to the value', () => {
    const addOne = value => value + 1
    const timesTwo = value => value * 2

    expect(runAll(10, addOne, timesTwo)).to.eql(22)
  })
})
