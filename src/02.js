import { expect } from 'chai'
// eslint-disable-next-line no-unused-vars
import R from 'ramda'

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

function convertPropertiesToIntegers() {
  return
}

xdescribe('convertPropertiesToIntegers', () => {
  it('returns the existing object if no changes', () => {
    const data = { foo: '1' }
    const propertyList = ['fud']
    const expected = { foo: '1' }

    expect(convertPropertiesToIntegers(propertyList, data)).to.eql(expected)
  })

  it('updates the given list of properties', () => {
    const data = {
      foo: '1',
      bar: '9'
    }
    const propertyList = [
      'foo',
      'fud'
    ]
    const expected = {
      foo: 1,
      bar: '9'
    }

    expect(convertPropertiesToIntegers(propertyList, data)).to.eql(expected)
  })
})
