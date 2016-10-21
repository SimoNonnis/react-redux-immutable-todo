import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TodoList from '../components/TodoList';


describe('Component: <TodoList/>', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TodoList/>)
  })

  it('should render an `h1`', () => {
    expect(
      wrapper.containsMatchingElement(<h1>Today's To Do List</h1>)
    ).to.be.true
  })

  it('should render an `input` field', () => {
    expect(
      wrapper.containsMatchingElement(<input/>)
    ).to.be.true
  })

  it('should render a `button` element', () => {
    expect(
      wrapper.containsMatchingElement(<button>+ Add</button>)
    ).to.be.true
  })

})
