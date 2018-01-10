import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

// --- Jest Notes ---
// Jest method toMatchSnapshop() allows you to compare the shallow render to a snapshot. 

// --- Enzyme Notes ---
// Enzyme method shallow() is used to shallow render the component.

test('Should render Header correctly', () => {
    const startLogout = () => { };
    const wrapper = shallow(<Header startLogout={startLogout} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);

    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
