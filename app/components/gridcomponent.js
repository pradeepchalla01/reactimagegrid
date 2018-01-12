import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ImageComp from './imagecomponent';
import utils from './../utils';

export default class GridComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { rows, cols } = this.props;
	  var generateRows = function() {
        let columns = cols > 12 ? 12 : cols;
        var dataRows = Array.from(Array(rows).keys());
        var dataCols= Array.from(Array(columns).keys());
        return dataRows.map(function(obj, i) {
            var cells = dataCols.map(function(o,j) {
            	let src = utils.images[j%utils.images.length];
                return (<Col key={j} xs={12} md={1}><ImageComp path={src}/></Col>);
            });
            return (<Row key={i}> {cells} </Row>);
        });
    }
    return (
		<Grid>
			<Panel header="Image Grid(N*N(Max 12 Columns with Bootstrap))">{generateRows()}</Panel>
		</Grid>
    )
  }
}