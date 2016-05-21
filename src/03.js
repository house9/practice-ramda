import { expect } from 'chai'
// eslint-disable-next-line no-unused-vars
import R from 'ramda'

describe('finding data', () => {
  const one = {
    id: 1,
    active: true,
    health: 50,
    treasures: []
  }
  const two = {
    id: 2,
    active: false,
    health: 0,
    treasures: [
      'eye-patch',
      'light-sabre'
    ]
  }
  const three = {
    id: 3,
    active: true,
    health: 150,
    treasures: [
      'light-sabre'
    ],
    superUser: true
  }
  const data = [one, two, three]

  xdescribe('findActive', () => {
    function findActive() {
      return
    }

    it('returns only active entries', () => {
      expect(findActive(data)).to.eql([one, three])
    })
  })

  xdescribe('findWithNoTreasure', () => {
    function findWithNoTreasure() {
      return
    }

    it('returns entries with no treasure', () => {
      expect(findWithNoTreasure(data)).to.eql([one])
    })
  })

  xdescribe('findActiveWithNoTreasure', () => {
    function findActiveWithNoTreasure() {
      return
    }

    it('returns active entries with no treasure', () => {
      expect(findActiveWithNoTreasure(data)).to.eql([one])
    })
  })

  xdescribe('findSuperUser', () => {
    function findSuperUser() {
      return
    }

    it('returns the super user', () => {
      expect(findSuperUser(data)).to.eql(three)
    })
  })

  xdescribe('averageHealthForActiveAccounts', () => {
    function averageHealthForActiveAccounts() {
      return
    }

    it('returns the average health', () => {
      expect(averageHealthForActiveAccounts(data)).to.eql(100)
    })
  })
})
