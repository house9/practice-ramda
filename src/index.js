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
    const addOne = value => {
      return value + 1
    }
    const timesTwo = value => {
      return value * 2
    }

    expect(runAll(10, addOne, timesTwo)).to.eql(22)
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

function appendToList() {
  return
}

xdescribe('appendToList', () => {
  it('is added to the list', () => {
    expect(appendToList(1, []).length).to.eq(1)
  })
})

function applyWithDefaults() {
  return
}

xdescribe('applyWithDefaults', () => {
  it('overrides properties', () => {
    const defaults = {
      start: 1,
      end: 101
    }
    const override = {
      start: 10,
      extra: 500
    }
    const expected = {
      start: 10,
      end: 101,
      extra: 500
    }

    expect(applyWithDefaults(defaults, override)).to.eql(expected)
  })
})
