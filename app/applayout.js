import React from 'react';
import {Navbar, Nav, NavItem, Image, Grid, Row, Col, Panel} from 'react-bootstrap';
import utils from './utils';
import GridComp from './components/gridcomponent';
import ImageGridComp from './components/imagegridcomponent';
export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {gridRows, gridCols} = utils;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React App</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
          <Navbar.Text>
            Responsive Configurable Image Grid(N*N)
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
        <div className="fluid-container">
          <ImageGridComp rows={gridRows} cols={gridCols}/>
          <GridComp rows={gridRows} cols={gridCols}/>
        </div>   
      </div>
    )
  }
}
