import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/testExpenses';

// --- Jest Notes ---
// ExpenseListItem is rendered passing in an expense from fixtures, spreading out the expense to get the needed properties.

test('Should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
    expect(wrapper).toMatchSnapshot();
});
