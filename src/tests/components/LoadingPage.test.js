import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

// --- Jest Notes ---
// Jest method toMatchSnapshop() allows you to compare the shallow render to a snapshot. 

// --- Enzyme Notes ---
// Enzyme method shallow() is used to shallow render the component.

test('Should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});
