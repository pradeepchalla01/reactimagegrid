import React from 'react';
import {Image} from 'react-bootstrap';

export default class ImageLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { path } = this.props;
    return (
      <div className="thumb"><img src={path} className="img-responsive" /></div>
    )
  }
}