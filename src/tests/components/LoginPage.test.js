import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

// --- Jest Notes ---
// NA

test('Should render LoginPage correctly', () => {
    const startLogin = () => { };
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const startLoginGit = jest.fn();
    const startLoginAnon = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} startLoginGit={startLoginGit} startLoginAnon={startLoginAnon} />);

    wrapper.find('#login1').simulate('click');
    expect(startLogin).toHaveBeenCalled();

    wrapper.find('#login2').simulate('click');
    expect(startLoginGit).toHaveBeenCalled();

    wrapper.find('#login3').simulate('click');
    expect(startLoginAnon).toHaveBeenCalled();
});
