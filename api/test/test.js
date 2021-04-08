/* eslint-env mocha */

const expect = require('chai').expect
const request = require('supertest')

describe('GET /iecho', () => {
  it('return status 200 ', (done) => {
    request('http://localhost:5000').get('/iecho?text=test')
      .then(res => {
        expect(res.status).to.equal(200)
        done()
      })
  })
  it('reversed text ', (done) => {
    request('http://localhost:5000').get('/iecho?text=test')
      .then(res => {
        expect(res.body.text).to.equal('tset')
        done()
      })
  })
  it('return FALSE in flag palindrome', (done) => {
    request('http://localhost:5000').get('/iecho?text=test')
      .then(res => {
        expect(res.body.palindrome).to.equal(false)
        done()
      })
  })
  it('return TRUE in flag palindrome', (done) => {
    request('http://localhost:5000').get('/iecho?text=oso')
      .then(res => {
        const { palindrome } = res.body
        expect(palindrome).to.equal(true)
        done()
      })
  })
  it('Flag Error', (done) => {
    request('http://localhost:5000').get('/iecho?texsdt=oso')
      .then(res => {
        expect(res.body).to.contain.property('error')
        done()
      })
  })
})
