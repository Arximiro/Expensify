import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

// --- Jest Notes ---
// NA

test('Should render ExpensesSummary with one expense', () => {    
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={73580} />);
    expect(wrapper).toMatchSnapshot();
});
