import React from 'react';
import { shallow, mount } from 'enzyme';
import AppLayout from '../app/applayout';
import GridComp from '../app/components/gridcomponent';
import ImageGridComp from '../app/components/imagegridcomponent';

describe('Testing AppLayout component renders and child component renders', () => {
    it('should render an AppLayout component', () => {
        const comp = shallow(<AppLayout />);
        expect(comp).toMatchSnapshot();
    });

    it('should render a GridComp component', () => {
        const comp = shallow(<GridComp />);
        expect(comp).toMatchSnapshot();
    });

    it('should render a ImageGridComp component', () => {
        const comp = shallow(<ImageGridComp />);
        expect(comp).toMatchSnapshot();
    });
});

describe('Testing AppLayout component', () => {
    it('should correctly pass props to GridComp component', () => {
        const comp = shallow(<GridComp rows={2} cols={3}/>);
        expect(comp.instance().props.rows).toEqual(2);
        expect(comp.instance().props.cols).toEqual(3);
    }); 
});


