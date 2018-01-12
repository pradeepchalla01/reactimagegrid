import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageComp from '../../app/components/imagecomponent';

describe('Testing ImageComp component renders', () => {
    it('should render a ImageComp component', () => {
        const comp = shallow(<ImageComp />);
        expect(comp).toMatchSnapshot();
    });
});

describe('Testing ImageComp component', () => {
    it('should correctly pass props to ImageComp component', () => {
        const comp = shallow(<ImageComp path={'image.png'}/>);
        expect(comp.instance().props.path).toEqual('image.png');
    }); 
});


 