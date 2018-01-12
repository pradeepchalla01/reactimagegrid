import React from 'react';
import { shallow, mount } from 'enzyme';
import GridComp from '../../app/components/gridcomponent';
import ImageComp from '../../app/components/imagecomponent';

describe('Testing GridComp component renders and child component renders', () => {
    it('should render a GridComp component', () => {
        const comp = shallow(<GridComp />);
        expect(comp).toMatchSnapshot();
    });
    it('should render a ImageComp component', () => {
        const comp = shallow(<ImageComp />);
        expect(comp).toMatchSnapshot();
    });
});

describe('Testing GridComp component', () => {
    it('should correctly pass props to ImageComp component', () => {
        const comp = shallow(<ImageComp path={'image.png'}/>);
        expect(comp.instance().props.path).toEqual('image.png');
    }); 
});


