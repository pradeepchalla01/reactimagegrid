import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ImageLayout from './image';
import utils from './../utils';

export default class ImageGridComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { rows, cols } = this.props;
	  var generateRows = function() {
        var dataRows = Array.from(Array(rows).keys());
        var dataCols=Array.from(Array(cols).keys());
        return dataRows.map(function(obj, i) {
            var cells = dataCols.map(function(o,j) {
            	let src = utils.images[j%utils.images.length];
                return (<ImageLayout key={j} path={src}/>);
            });
            return (<div key={i} className="thumb-container" style={{'width':(108*cols)}}> {cells} </div>);
        });
    }
    return (
		<div className="container">
            <div className="scrollContainer">
                {generateRows()}
            </div>
        </div>
    )
  }
}