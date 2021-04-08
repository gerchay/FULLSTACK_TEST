import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('Test in <App />', () => {
  let wrapper = shallow( <App /> )

  beforeEach( () =>  {
    wrapper = shallow( <App /> )
  })

  test('view <App /> success', () => {
    expect( wrapper ).toMatchSnapshot()
  })

})

