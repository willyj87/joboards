import React from 'react';
import renderer from 'react-test-renderer';
import * as uuid from 'uuid';
import { render, screen, fireEvent } from '@testing-library/react';
import ListGroups from '../index';
import items from './__mock__/items.mock';

jest.mock('uuid');

const totalOffers = 4;
const handleClick = jest.fn();
const Component = <ListGroups items={items} totalOffers={totalOffers} handleClick={handleClick} />;
describe('ListGroups', () => {
  it('renders ListGroups correctly', () => {
    uuid.v4.mockReturnValue('1234');
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('display correct badges', () => {
    render(Component);
    const badge = screen.getByTestId('all-test-badge');
    expect(badge).toHaveTextContent('4');
  });
  it('should call the handleClick method', () => {
    render(Component);
    const listGroupsItem = screen.getByTestId('Business Intelligence & Machine Learning');
    fireEvent.click(listGroupsItem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
