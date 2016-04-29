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

function selectProperties() {
  return
}

xdescribe('selectProperties', () => {
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

xdescribe('setProperty', () => {
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

function setNestedProperty() {
  return
}

xdescribe('setNestedProperty', () => {
  const data = {
    parent: {
      child: 'child',
      nested: {
        nestedChild: 'nestedChild'
      }
    }
  }

  it('appends the new property', () => {
    const actual = setNestedProperty(['parent', 'sibling'], 'SIBLING', data)
    const expected = {
      parent: {
        child: 'child',
        sibling: 'SIBLING',
        nested: {
          nestedChild: 'nestedChild'
        }
      }
    }

    expect(actual).to.eql(expected)
  })

  it('updates existing property', () => {
    const actual = setNestedProperty(
      ['parent', 'nested', 'nestedChild'],
      'NESTED',
      data
    )
    const expected = {
      parent: {
        child: 'child',
        nested: {
          nestedChild: 'NESTED'
        }
      }
    }

    expect(actual).to.eql(expected)
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
